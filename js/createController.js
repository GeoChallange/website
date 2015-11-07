(function () {
    'use strict';

    angular.module('app')
        .controller('CreateController', function ($scope, API) {
            $scope.challenge = {};

            $scope.challenge.quests = [{
                lat: 59.91,
                lon: 10.75
            }];
            $scope.addQuest = function () {
                $scope.challenge.quests.push({});
                console.debug($scope.challenge.quests);
            };

            $scope.$on('leafletDirectiveMarker.dragend', function (e, args) {
                console.debug('adksapdja', e, args);
                $scope.challenge.quests[0].lat = args.model.lat;
                $scope.challenge.quests[0].lon = args.model.lng;

            });

            $scope.$on('leafletDirectiveMap.click', function (e, args) {
                console.debug(e, args);
                $scope.challenge.quests[0].lat = args.leafletEvent.latlng.lat;
                $scope.challenge.quests[0].lon = args.leafletEvent.latlng.lng;
            })
        });
})();