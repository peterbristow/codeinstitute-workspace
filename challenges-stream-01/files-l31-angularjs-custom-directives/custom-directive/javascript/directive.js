angular.module('myDirectives', []).directive('myHello', function() {
  return {
    template: '<div>Hello world!</div>',
    restrict: 'E'
  };
});