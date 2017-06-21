angular
  .module('dataviz')
  .component('dataviz', {
    templateUrl: 'app/dataviz/dataviz.template.html',
    controller: [function DataVizController() {
      this.items = [{
        key: 'Group 1',
        values: [],
      }];

      this.chartData = {
        datasets: [
          {
            label: 'Dataset #1',
            data: [],
            backgroundColor: '#FF6384',
            hoverBackgroundColor: '#FF6384',
          },
        ],
      };

      this.chartOptions = {};

      this.onChartClick = event => console.log(event);

      this.createPlot = (dataPtsStr) => {
        const regex = /\)[^0-9]+\(*/;
        const applyRegex = new RegExp(regex, 'gi');
        const cleanedDataPts = dataPtsStr.trim().slice(1, dataPtsStr.length - 1).split(applyRegex);
        cleanedDataPts.forEach((xyPtsStr) => {
          const xyTuple = xyPtsStr.split(',');
          this.chartData.datasets[0].data.push({
            x: +xyTuple[0],
            y: +xyTuple[1],
            r: 10,
          });
        });
        console.log(this.items, 'new item list');
      };
      // Here
    }],
  });
