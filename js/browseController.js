angular.module('app')
.controller('BrowseController', function ($scope, API) {
  API.allChallenges().then(function (data) {
    console.log(data);
    $scope.challenges = data;
  });
});
