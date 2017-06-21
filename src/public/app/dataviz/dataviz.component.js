angular
  .module('dataviz')
  .component('dataviz', {
    templateUrl: 'app/dataviz/dataviz.template.html',
    controller: [function DataVizController() {
      this.curMinX = -5;
      this.curMinY = -5;
      this.curMaxX = 5;
      this.curMaxY = 5;

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

      this.chartOptions = {
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
                max: this.curMaxY,
                min: this.curMinY,
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
                max: this.curMaxX,
                min: this.curMinX,
              },
            }],
        },
      };

      this.onChartClick = event => console.log(event);

      this.createPlot = (dataPtsStr) => {
        const regex = /\)[^0-9]+\(*/;
        const applyRegex = new RegExp(regex, 'gi');
        const cleanedDataPts = dataPtsStr.trim().slice(1, dataPtsStr.length - 1).split(applyRegex);
        cleanedDataPts.forEach((xyPtsStr) => {
          const xyTuple = xyPtsStr.split(',');
          this.curMinX = this.curMinX === null || +xyTuple[0] < this.curMinX ? +xyTuple[0] : this.curMinX;
          this.chartOptions.scales.xAxes[0].ticks.min = this.curMinX;
          this.curMinY = this.curMinY === null || +xyTuple[1] < this.curMinY ? +xyTuple[1] : this.curMinY;
          this.chartOptions.scales.yAxes[0].ticks.min = this.curMinY;
          this.curMaxX = this.curMaxX === null || +xyTuple[0] > this.curMaxX ? +xyTuple[0] : this.curMaxX;
          this.chartOptions.scales.xAxes[0].ticks.max = this.curMaxX;
          this.curMaxY = this.curMaxY === null || +xyTuple[1] > this.curMaxY ? +xyTuple[1] : this.curMaxY;
          this.chartOptions.scales.yAxes[0].ticks.max = this.curMaxY;
          this.chartData.datasets[0].data.push({
            x: +xyTuple[0],
            y: +xyTuple[1],
            r: 10,
          });
        });      
        console.log(this.curMinX, 'this is cur min x');
        console.log(this.curMinY, 'this is cur min y');
        console.log(this.curMaxX, 'this is cur max x');
        console.log(this.curMaxY, 'this is cur max y');
      };
      // Here
    }],
  });
