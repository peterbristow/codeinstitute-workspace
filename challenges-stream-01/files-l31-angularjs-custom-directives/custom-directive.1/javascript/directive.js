angular.module('myDirectives', []).directive('myHello', function() {
  return {
    template: '<div>Hello world! As An Attribute</div>',
    restrict: 'EA'
  };
});