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
            label: 'First Dataset',
            data: [
              {
                x: 20,
                y: 30,
                r: 15,
              },
              {
                x: 40,
                y: 10,
                r: 10,
              },
            ],
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
          this.items[0].values.push({
            shape: 'circle',
            size: 0.5,
            x: +xyTuple[0],
            y: +xyTuple[1],
          });
        });
        console.log(this.items, 'new item list');
      };
      // Here
    }],
  });
