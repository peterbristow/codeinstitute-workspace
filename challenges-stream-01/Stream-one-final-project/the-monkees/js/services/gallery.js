angular.module('theMonkeesApp')
.factory('GalleryService', ['$http', function($http){
    
    return {
        getData: function(){
            return $http.get('data/gallery.json')
              .then(function(response){
                  return response.data;
              })
              .catch(function(err){
                  console.error('ERROR', err);
              });
        }
    };
    
}]);