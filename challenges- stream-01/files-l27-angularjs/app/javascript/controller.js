angular.module('myControllers',[]);
 
angular.module('myControllers').controller('MyController',function($scope)
{
      // set scope with first and last names 
      // add greeting function
      $scope.firstName = 'Sean';
      $scope.lastName = 'Citizen';
      $scope.greeting = function(){
            return "Greetings " + $scope.firstName + " " + $scope.lastName;
      };
});

angular.module('myControllers').controller('MyOtherCtrl',function($scope) 
{
   $scope.student = {
      firstName: " ",
      lastName: " ",
   };
});