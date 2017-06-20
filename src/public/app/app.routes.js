angular
  .module('app')
  .config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
    .when('/dataviz', {
      template: '<dataviz></dataviz>',
    })
    .otherwise('/dataviz');
  },
  ]);
