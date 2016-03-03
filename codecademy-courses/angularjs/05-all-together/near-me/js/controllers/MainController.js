app.controller("MainController", ['$scope', 'places', function($scope, places) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });
  $scope.mapCenter = { lat: 40.741934, lng: -74.004897, zoom: 17 };
  
  places.success(function(data) {
    $scope.geodata = data;
    $scope.mapMarkers = geodataToMarkers($scope.geodata);
  });
	
}]);