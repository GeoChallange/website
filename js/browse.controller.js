angular.module('app')
.controller('BrowseController', function ($rootScope, $location, Challenge) {
  Challenge.query().then(function (data) {
    $rootScope.navbarCollapse = true;
    console.log(data);
    $rootScope.challenges = data;

    $rootScope.search = function () {
      console.debug($rootScope.selected);
      $location.path('/browse/' + $rootScope.selected.challengeId);


    }
  });
});
