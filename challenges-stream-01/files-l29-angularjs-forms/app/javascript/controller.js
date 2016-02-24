angular.module('myControllers',[]);
 
angular.module("MyApp", ['myControllers']);

angular.module('myControllers',[])
  .controller('FormController',function($scope) {
    $scope.user = {};
    $scope.wasSubmitted = false;
  
    $scope.submit = function() {
      $scope.wasSubmitted = true;
    };
});