/**
 * Created by HelmutCarmen on 06.11.2015.
 */
angular.module('app', ['ngRoute', 'ui.bootstrap'])
.config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'templates/index.view.html',
    controller: 'BrowseController'
  })
    .when('/create', {
      templateUrl: 'templates/create.view.html'
    })
    .otherwise({
      redirect: '/'
    })
});
