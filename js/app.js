/**
 * Created by HelmutCarmen on 06.11.2015.
 */
angular.module('app', ['ngRoute', 'ui.bootstrap', 'leaflet-directive'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/browse', {
                templateUrl: 'templates/browse.view.html',
                controller: 'BrowseController'
            })
            .when('/browse/:id', {
                templateUrl: 'templates/challenge.view.html',
                controller: 'ChallengeController'
            })
            .when('/create', {
                templateUrl: 'templates/create.view.html',
                controller: 'CreateController'
            })
            .otherwise({
                redirectTo: '/browse'
            })
    })
    .directive('questStep', function () {

        return {
            templateUrl: 'templates/quest.view.html',
            scope: {
                quest: '=quest'
            }
        };
    });
