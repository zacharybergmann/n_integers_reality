angular
  .module('dataviz')
  .component('dataviz', {
    templateUrl: 'app/dataviz/dataviz.template.html',
    controller: function DataVizController() {
      this.items = [];

      this.addItem = (dataPt) => {
        this.items.push(dataPt);
        console.log(this.items, 'new item list');
      };

      this.options = {
        chart: {
          type: 'scatterChart',
          height: 450,
          color: d3.scale.category10().range(),
          scatter: {
            onlyCircles: false,
          },
          showDistX: true,
          showDistY: true,
          duration: 350,
          xAxis: {
            axisLabel: 'X Axis',
            tickFormat: d => d3.format('.02f')(d),
          },
          yAxis: {
            axisLabel: 'Y Axis',
            tickFormat: d => d3.format('.02f')(d),
            axisLabelDistance: -5,
          },
          zoom: {
            // NOTE: All attributes below are optional
            enabled: true,
            scaleExtent: [1, 10],
            useFixedDomain: false,
            useNiceScale: false,
            horizontalOff: false,
            verticalOff: false,
            unzoomEventType: 'dblclick.zoom',
          },
        },
      };

      // this.data = generateData(4, 40);
      // console.log(this.data, 'this is your data generated');
      // /* Random Data Generator (took from nvd3.org) */
      // function generateData(groups, points) {
      //   const data = [];
      //   const shapes = ['circle'];
      //   const random = d3.random.normal();

      //   for (let i = 0; i < groups; i++) {
      //     data.push({
      //       key: 'Group ' + i,
      //       values: [],
      //     });

      //     for (let j = 0; j < points; j++) {
      //       data[i].values.push({
      //         x: random(),
      //         y: random(),
      //         size: Math.random(),
      //         shape: shapes[j % 6],
      //       });
      //     }
      //   }
      //   return data;
      // }
    },
  });
