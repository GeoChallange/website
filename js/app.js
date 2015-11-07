/**
 * Created by HelmutCarmen on 06.11.2015.
 */
angular.module('app', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'leaflet-directive'])
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
    })
    .directive('map', function ($window) {
        var setMap = function (scope, element, attrs) {
            var mobile = $window.innerWidth < 992;
            if (!mobile) {
                console.debug(element.parent()[0].offsetWidth);
                element.css('position', 'fixed');
                element.css('top', '80px');
                element.css('left', '50%');
                element.css('width', element.parent()[0].offsetWidth + 'px');
                element.css('padding-bottom', '0');
            } else {
                element.css('position', 'relative');
                element.css('top', '0');
                element.css('left', '0');
                element.css('width', 'auto');
                element.css('padding-bottom', '20px');
            }
        };
        return function (scope, element, attrs) {
            angular.element($window).bind('resize', function (e) {
                scope.$apply(function () {
                    setMap(scope,element,attrs);
                })
            });
            setMap(scope,element,attrs);
        };
    })
    .value('URL', 'http://x.x.x.x:8080');
