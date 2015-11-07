/**
 * Created by HelmutCarmen on 06.11.2015.
 */
angular.module('app', ['ngRoute', 'ui.bootstrap', 'leaflet-directive'])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'templates/index.view.html',
                controller: 'BrowseController'
            })
            .when('/create', {
                templateUrl: 'templates/create.view.html',
                controller: 'CreateController'
            })
            .otherwise({
                redirect: '/'
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
