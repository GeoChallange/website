/**
 * Created by HelmutCarmen on 06.11.2015.
 */
angular.module('app', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.bootstrap.datetimepicker', 'leaflet-directive', 'ngStorage'])
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
            } else {
                element.css('position', 'relative');
                element.css('top', '0');
                element.css('left', '0');
                element.css('width', 'auto');
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
    .run(function ($rootScope, $localStorage) {
        $rootScope.globals = $localStorage;
        if (!$rootScope.globals.userId) {
            $rootScope.globals.userId = ''+Math.floor(Math.random() * 100000);
        }

    })
    .value('URL', 'http://192.168.0.105:8080');
