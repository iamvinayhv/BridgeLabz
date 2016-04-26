angular.module('bridgeApp').controller('resumeController',function($scope){
    $scope.thankU = false;
    $scope.hideThank = true;
    $scope.ani = function() {
        
        $scope.formAnim=AnimClick;
        $scope.hideForm = true;
        $scope.thank=thankClick;
        $scope.msg1 = "Thank You!!";
        $scope.msg2 = " We will contact you soon......";
        $scope.thankU = !$scope.thankU;
        $scope.hideThank = !$scope.hideThank;

    } 
});

