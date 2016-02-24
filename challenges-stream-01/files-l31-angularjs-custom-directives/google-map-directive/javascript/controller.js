angular.module('MyControllers',[]);
.controller('AboutController',function($scope) {
//
   $scope.title = 'About Us';
   $scope.maps = [{
        address: 'Trinity College Dublin, Dublin',
        zoom: 14,
        width: 400      
        },{
        address: '51st Street, New York, New York',
        zoom: 14,
        width: 400      
        }];
  $scope.map = $scope.maps[0];
})