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
      const regex = /\)[^-+0-9]+\(*/;
      const applyRegex = new RegExp(regex, 'gi');
      const cleanedDataPts = dataPtsStr.trim().slice(1, dataPtsStr.length - 1).split(applyRegex);
      console.log(cleanedDataPts);
      cleanedDataPts.forEach((xyPtsStr) => {
        const xyTuple = xyPtsStr.split(',');
        console.log(xyTuple);
        $scope.curMinX = !$scope.chartData.datasets[0].data.length || +xyTuple[0] < $scope.curMinX ? +xyTuple[0] : $scope.curMinX;
        $scope.chartOptions.scales.xAxes[0].ticks.min = $scope.curMinX > 0 ? 0.9 * $scope.curMinX : 1.1 * $scope.curMinX;
        $scope.curMinY = !$scope.chartData.datasets[0].data.length || +xyTuple[1] < $scope.curMinY ? +xyTuple[1] : $scope.curMinY;
        $scope.chartOptions.scales.yAxes[0].ticks.min = $scope.curMinY > 0 ? 0.9 * $scope.curMinY : 1.1 * $scope.curMinY;
        $scope.curMaxX = !$scope.chartData.datasets[0].data.length || +xyTuple[0] > $scope.curMaxX ? +xyTuple[0] : $scope.curMaxX;
        $scope.chartOptions.scales.xAxes[0].ticks.max = $scope.curMaxX > 0 ? 1.1 * $scope.curMaxX : 0.9 * $scope.curMaxX;
        $scope.curMaxY = !$scope.chartData.datasets[0].data.length || +xyTuple[1] > $scope.curMaxY ? +xyTuple[1] : $scope.curMaxY;
        $scope.chartOptions.scales.yAxes[0].ticks.max = $scope.curMaxY > 0 ? 1.1 * $scope.curMaxY : 0.9 * $scope.curMaxY;

        $scope.chartData.datasets[0].data.push({
          x: +xyTuple[0],
          y: +xyTuple[1],
          r: 10,
        });
      });
      console.log($scope.curMaxX, $scope.curMaxY, $scope.curMinX, $scope.curMinY);
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





// type: 'line',
//   data: {
//     labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
//     datasets: [{ 
//         data: [86,114,106,106,107,111,133,221,783,2478],
//         label: "Africa",
//         borderColor: "#3e95cd",
//         fill: false
//       }, { 
//         data: [282,350,411,502,635,809,947,1402,3700,5267],
//         label: "Asia",
//         borderColor: "#8e5ea2",
//         fill: false
//       }, { 
//         data: [168,170,178,190,203,276,408,547,675,734],
//         label: "Europe",
//         borderColor: "#3cba9f",
//         fill: false
//       }, { 
//         data: [40,20,10,16,24,38,74,167,508,784],
//         label: "Latin America",
//         borderColor: "#e8c3b9",
//         fill: false
//       }, { 
//         data: [6,3,2,2,7,26,82,172,312,433],
//         label: "North America",
//         borderColor: "#c45850",
//         fill: false
//       }
//     ]
//   },
//   options: {
//     title: {
//       display: true,
//       text: 'World population per region (in millions)'
//     }
//   }
// });