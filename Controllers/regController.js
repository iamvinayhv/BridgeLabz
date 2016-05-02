angular.module('bridgeApp').
    controller('regController',function($scope,$location,$http) {
        $scope.reg = function(){
            var card={
                user:$scope.user,
                email:$scope.email,
                password:$scope.password,
            };
        $http({
            method:'POST',
            url:'',
            data:card,
            headers:{'content-Type' : 'application/json'},
        }).success(function(response,status){
            alert("Registration is Successfully done! Please Login here..");
            $location.path('/Login');
        }).error(function(response,status){
            alert(status+"error");
            alert(response);
            alert("Sorry!!Can't register");
        });
        };
    
});
    