/**
 * Created by HelmutCarmen on 06.11.2015.
 */
angular.module('app')
  .service('API', function ($http, $q) {
    var _self = this;

    _self.allChallenges = function () {
      var deferred = $q.defer();

      $http.get('browse.json').success(function (data) {
        deferred.resolve(data);
      }).error(function () {
        deferred.reject([]);
      });
      return deferred.promise;
    };
  });
