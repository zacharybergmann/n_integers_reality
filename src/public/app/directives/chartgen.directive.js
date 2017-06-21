angular.module('chartGenDirective')
  .controller('chartGenController', ($scope) => {
    $scope.curMinX = -5;
    $scope.curMinY = -5;
    $scope.curMaxX = 5;
    $scope.curMaxY = 5;

    $scope.chartData = {
      datasets: [
        {
          label: 'Dataset #1',
          data: [],
          backgroundColor: '#31298e',
          hoverBackgroundColor: '#31298e',
        },
      ],
    };

    $scope.chartOptions = {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            id: 'A',
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Y Position',
            },
            ticks: {
              max: $scope.curMaxY,
              min: $scope.curMinY,
            },
          }],
        xAxes: [
          {
            id: 'B',
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: 'X Position',
            },
            ticks: {
              max: $scope.curMaxX,
              min: $scope.curMinX,
            },
          }],
      },
    };

    $scope.onChartClick = event => console.log(event);

    $scope.createPlot = (dataPtsStr) => {
      $scope.chartData.datasets[0].data = [];
      const regex = /\)[^0-9]+\(*/;
      const applyRegex = new RegExp(regex, 'gi');
      const cleanedDataPts = dataPtsStr.trim().slice(1, dataPtsStr.length - 1).split(applyRegex);
      cleanedDataPts.forEach((xyPtsStr) => {
        const xyTuple = xyPtsStr.split(',');

        $scope.curMinX = $scope.curMinX === null || +xyTuple[0] < $scope.curMinX ? +xyTuple[0] : $scope.curMinX;
        $scope.chartOptions.scales.xAxes[0].ticks.min = $scope.curMinX;
        $scope.curMinY = $scope.curMinY === null || +xyTuple[1] < $scope.curMinY ? +xyTuple[1] : $scope.curMinY;
        $scope.chartOptions.scales.yAxes[0].ticks.min = $scope.curMinY;
        $scope.curMaxX = $scope.curMaxX === null || +xyTuple[0] > $scope.curMaxX ? +xyTuple[0] : $scope.curMaxX;
        $scope.chartOptions.scales.xAxes[0].ticks.max = $scope.curMaxX;
        $scope.curMaxY = $scope.curMaxY === null || +xyTuple[1] > $scope.curMaxY ? +xyTuple[1] : $scope.curMaxY;
        $scope.chartOptions.scales.yAxes[0].ticks.max = $scope.curMaxY;

        $scope.chartData.datasets[0].data.push({
          x: +xyTuple[0],
          y: +xyTuple[1],
          r: 10,
        });
      });
    };
  })
  .directive('chartgen', () => {
    return {
      controller: 'chartGenController',
      controllerAs: 'ctrl',
      bindToController: true,
      templateUrl: 'app/directives/chartgen.template.html',
    };
  });
