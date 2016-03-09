angular.module('theMonkeesApp')
    .controller('GalleryController', ['$scope', 'GalleryService', 'Lightbox', function ($scope, GalleryService, Lightbox) {
        $scope.pageTitle = "Band Photo Gallery";
        $scope.images = [];
        
        GalleryService.getData().then(function(data){
            $scope.images = data.images;
        });
        
        // baguetteBox.run('.the-monkees-gallery>.gallery');
        $scope.openLightboxModal = function (index) {
          Lightbox.openModal($scope.images, index);
        };
        
    }]);
