(function () {
    'use strict';

    angular.module('app')
        .controller('ChallengeController', function ($rootScope, $scope, $routeParams, Challenge, Dialog) {
            $rootScope.navbarCollapse = true;
            Challenge.get($routeParams.id).then(function (challenge) {

                $scope.challenge = challenge;
                for (var i = 0; i < $scope.challenge.participants.length; i++) {
                    var p = $scope.challenge.participants[i];
                    if (p == $rootScope.globals.userId) {
                        $scope.hideButton = true;
                        break;
                    }
                }
                console.debug(challenge);
            });
            $rootScope.selected = null;
            $scope.join = function () {
                console.log('join');
                Challenge.join($scope.challenge._id, $rootScope.globals.userId).then(function () {
                    Dialog.alert({title: 'Join successful', body: 'Congratulation'}).result.then(function () {
                        $scope.hideButton = true;
                        $scope.challenge.participants.push($rootScope.globals.userId);
                    });
                });
            }
        });
})();
