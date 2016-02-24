angular.module('myControllers',[]);
 
angular.module("MyApp", ['myControllers']);

angular.module('myControllers',[])
  .controller('FormController',function($scope) {
    $scope.user = {};
    $scope.wasSubmitted = false;
  
    $scope.submit = function() {
      $scope.wasSubmitted = true;
      if($scope.wasSubmitted) {
        $scope.wasSubmitted = false;
        //continue with form processing
        alert("Form Valid: " + $scope.user.username + " " +  $scope.user.email);
        $scope.user = {}; //reset the form
        return; // return from function
      }
    };

});