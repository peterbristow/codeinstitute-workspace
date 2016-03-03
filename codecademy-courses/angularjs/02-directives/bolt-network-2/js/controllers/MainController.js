app.controller('MainController', ['$scope', function($scope) {
  $scope.program = {
    series: "Sherlock",
    series_img: "img/sherlock.jpg",
    genre: "Crime drama", 
    season: 3, 
    episode: "The Empty Hearse", 
    description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.", 
    datetime: new Date(2014, 11, 31, 21, 00, 00, 00)
  };
  
  $scope.program2 = {
    series: "Big Bang Theory",
    series_img: "img/big-bang-theory.jpg",
    genre: "Comedy", 
    season: 1, 
    episode: "The Hofstadter Insufficiency", 
    description: "Penny and Sheldon bond during the summer over missing Leonard. Penny calls Leonard, who is partying on the ship and does not sound like he is missing Penny. Penny suggests exchanging secrets with Sheldon, then tells him she appeared topless in an unreleased horror movie. Sheldon says Howard found the clip when they had first met. Sheldon's secrt is that he does not like YouTube's new rating system. Annoyed, Penny decides to leave, but stays and apologizes when she realizes that she hurt Sheldon's feelings. Leonard shows Penny's movie to his shipmates.", 
    datetime: new Date(2013, 09, 26, 19, 30, 00, 00)
  };

}]);