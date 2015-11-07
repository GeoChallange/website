(function () {
    'use strict';

    angular.module('app')
        .controller('ChallengeController', function ($rootScope, $scope, $routeParams, Challenge) {
            Challenge.get($routeParams.id).then(function (challenge) {
                $rootScope.navbarCollapse = true;
                $scope.challenge = challenge;
                console.debug(challenge);
            });
            $rootScope.selected = null;

        });
})();