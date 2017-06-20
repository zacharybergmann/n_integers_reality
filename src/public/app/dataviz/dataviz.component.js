angular
  .module('dataviz')
  .component('dataviz', {
    templateUrl: 'app/dataviz/dataviz.template.html',
    controller: ['$rootScope', '$location', function DataVizController($rootScope, $location) {
      this.items = [];
    }],
  });
