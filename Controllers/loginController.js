angular.module('bridgeApp').controller('loginController',loginController);
function loginController($auth,$state,$scope,$location){
    var lg = this;
    $scope.login = function(){
        var card = {
            email: lg.email,
            password: lg.password
        };
        $auth.login(card).then(function(data){
            if($auth.isAuthenticated()){
                $state.go('Home', {});
            }
            else{
                $location.path('/Login');
                $scope.isValid=true;
                $scope.error="Incorrect Email or Password";
            }
        }).catch(function (error) {
            lg.error = error;
            alert("Fail to LogIn");
        });
    };
    $scope.authenticate = function (provider) {
        $auth.authenticate(provider).then(function () {
            $location.path('/Home');
            })
            .catch(function (error) {
                if (error.error) {
                    console.log("error at client side.");
                } else if (error.data) {
                    alert("server error");
                } else {
                    alert("another server error");
                }
            });
    };
}