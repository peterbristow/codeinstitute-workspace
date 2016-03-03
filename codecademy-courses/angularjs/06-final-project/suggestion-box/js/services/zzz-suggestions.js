app.factory('suggestions', ['$http', function($http) {
  return $http.post('suggestions.json')
  .success(function(data) {
    var demoSuggestions = data;
    return demoSuggestions;
  })
  .error(function(err) {
    return err;
  });
}]);