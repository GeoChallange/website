(function () {
    'use strict';

    angular.module('app')
        .controller('CreateController', function ($scope, API) {
            $scope.challenge = {};

            $scope.map = {
                center: {
                    lat: 52.2721095,
                    lng: 10.3878014,
                    zoom: 6
                },
                defaults: {

                },
                markers: {}
            };


            $scope.challenge.quests = [{}];
            $scope.addQuest = function () {
                $scope.challenge.quests.push({});
                console.debug($scope.challenge.quests);
            };

            $scope.$on('leafletDirectiveMap.click', function (e, args) {
                console.debug(args);
                var quest =$scope.challenge.quests[$scope.challenge.quests.length - 1];
                quest.lon = args.leafletEvent.latlng.lng;
                quest.lat = args.leafletEvent.latlng.lat;
                $scope.map.markers['quest_' + $scope.challenge.quests.length] ={
                    lng: quest.lon,
                    lat: quest.lat
                };
            })

        });
})();