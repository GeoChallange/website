angular.module('app')
.controller('BrowseController', function ($rootScope, $scope, $location, Challenge) {
  $rootScope.navbarCollapse = true;
  Challenge.query().then(function (data) {

    console.log(data);
    $rootScope.challenges = data;

    $rootScope.search = function () {
      console.debug($rootScope.selected);
      $location.path('/browse/' + $rootScope.selected._id);
    };

    $scope.filter = 'startDate';
    $scope.orderBy = function (filter) {
      if ($scope.filter == filter) {
        $scope.filter = '-' + filter;
      } else {
        $scope.filter = filter;
      }
      console.debug($scope.filter);
    };

    $scope.open = function (id) {
      $location.path('/browse/' + id);
    };

    $scope.filterIconClass = function () {
      if ($scope.filter.substr(0,1) == '-') {
        return 'glyphicon glyphicon-triangle-bottom';
      }
      else {
        return 'glyphicon glyphicon-triangle-top';
      }
    };
    $scope.showFilterIcon = function (filter) {
      return filter == $scope.filter || '-'+filter == $scope.filter;
    }
  });
});
