/**
 * Created by HelmutCarmen on 06.11.2015.
 */
angular.module('app')
    .service('Challenge', function ($http, $q, URL) {
        var _self = this;

        _self.query = function () {
            var deferred = $q.defer();

            //$http.get('browse.json')
            $http.get(URL + '/challenge')
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
            $http.get(URL + '/challenge/' + id).success(function (data) {
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

        _self.join = function (challengeId, userId) {
            console.log('service', challengeId, userId);
            var deferred = $q.defer();
            $http.put(URL + '/challenge/' + challengeId, { userId: userId })
                .success(function (data) {
                    console.debug(data);
                    deferred.resolve(data);
                })
                .error(function (err) {
                    console.debug(err);
                    deferred.reject(err);
                });
            return deferred.promise;
        };

    });
