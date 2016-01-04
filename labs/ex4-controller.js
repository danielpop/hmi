var myApp = angular.module('movies', []);

myApp.controller('MoviesController', function ($scope) {
  $scope.cartoons = [
    {'name': 'The Lion King',
     'year': 1994,
     'descr': 'Lion cub and future king Simba tests his limits, supported by his family, but sometimes gets in over his head.'},
    {'name': 'Lady and The Tramp',
     'year' : 1955,
     'descr': 'The romantic tale of a sheltered uptown Cocker Spaniel dog and a streetwise downtown Mutt.'},
    {'name': 'Frozen',
     'year': 2013,
     'descr': 'When a princess with the power to turn things into ice curses her home in infinite winter, her sister, Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.'}
  ];

  $scope.locate = function(q) {
	alert("Query the movie database: " + q);
  }

});

