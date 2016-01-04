angular.module('data_gov_test', []);

function DataCtrl($scope, $http) {

  $http.jsonp("http://data.gov.ro/api/3/action/package_list?callback=JSON_CALLBACK").
  success(function(data) {
    $scope.result = data.result;
  }).
  error(function(data) {
    $scope.data = "Request failed";
  });
}
