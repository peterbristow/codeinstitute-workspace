angular.module('collegeControllers',[])
   .controller('StudentController',function($scope) {
   //  
   	var student = {
         firstName: "Rich",
         lastName: "Richie",
         fees: 500,
         subjects: [{name: 'Physics', marks: 70}, 
                   {name: 'Chemistry',marks: 80}, 
                   {name: 'Math',marks: 65}, 
                   {name: 'English',marks: 75}, 
                   {name: 'Hindi',marks: 67}],
         fullName: function () {
                   return this.firstName + " " + this.lastName;
      }
   };
   $scope.student = student;
   $scope.greeting = function(){
   	return "Greetings " + $scope.student.fullName();
   };
   
   $scope.results = true;
   $scope.showResults = function(){
	  return ($scope.results ? $scope.results=false : $scope.results=true);
	};
	
	$scope.aGradeFilter = function (subject) {
      return (subject.marks > 74);
   };

});