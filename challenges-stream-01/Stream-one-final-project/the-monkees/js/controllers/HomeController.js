angular.module('theMonkeesApp')
    .controller('HomeController', ['$scope', function ($scope) {
        $scope.bandName = "The Monkees";
        $scope.pageTitle = "Home";
    }]);
