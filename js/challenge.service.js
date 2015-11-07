/**
 * Created by HelmutCarmen on 06.11.2015.
 */
angular.module('app')
    .service('Challenge', function ($http, $q, URL) {
        var _self = this;

        _self.query = function () {
            var deferred = $q.defer();

            $http.get('browse.json')
                //$http.get('http://10.41.0.1:8080/challenge')
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function () {
                    deferred.reject([]);
                });
            return deferred.promise;
        };

        _self.get = function (id) {
            var deferred = $q.defer();
            $http.get('challenge.json').success(function (data) {
                deferred.resolve(data);
            }).error(function () {
                deferred.reject(null);
            });
            return deferred.promise;
        };

        _self.save = function (challenge) {
            var deferred = $q.defer();
            $http.post(URL + '/challenge', challenge)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        };

    });
