(function () {
    'use strict';

    angular.module('app')
        .controller('ChallengeController', function ($rootScope, $scope, $routeParams, Challenge, Dialog) {
            Challenge.get($routeParams.id).then(function (challenge) {
                $rootScope.navbarCollapse = true;
                $scope.challenge = challenge;
                for (var i = 0; i < $scope.challenge.length; i++) {

                }
                console.debug(challenge);
            });
            $rootScope.selected = null;
            $scope.join = function () {
                Challenge.join($scope.challenge._id, '' + Math.floor(Math.random() * 100000)).then(function () {
                    Dialog.alert({title: 'Join successful', body: 'Congratulation'}).result.then(function () {
                        $scope.hideButton = true;

                    });
                });
            }
        });
})();
