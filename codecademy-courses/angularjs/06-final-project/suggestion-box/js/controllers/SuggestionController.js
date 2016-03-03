app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
    $scope.appTitle = "Suggestion Box - Add Comment";
    $scope.post = suggestions.posts[$routeParams.id];
    $scope.addComment = function() {
         //if input empty, don't submit
        if(!$scope.comment || $scope.comment === "") {
            return;
        }
         
        //push comment to the post.comments array in suggestions.js
        $scope.post.comments.push({
            body: $scope.comment,
            upvotes: 0,
        });
         
        //after submit, clear input
        $scope.comment = '';
    };
    $scope.upVoteComment = function(comment) {
        return comment.upvotes += 1;
    }
}]);