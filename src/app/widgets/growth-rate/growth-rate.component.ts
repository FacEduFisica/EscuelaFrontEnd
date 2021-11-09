import { Component, OnInit } from '@angular/core';
import {
    ILineChartOptions,
    IChartistData
} from 'chartist';
import { ChartType } from 'ng-chartist';
import * as ctLegends from 'chartist-plugin-legend/chartist-plugin-legend.js';

@Component({
  selector: 'widget-growth-rate',
  templateUrl: 'growth-rate.component.html'
})
export class GrowthRateComponent implements OnInit {
  type: ChartType = 'Line';

  data: IChartistData = {
    labels: [
      '10',
      '20',
      '30',
      '40',
      '50',
      '60',
      '70'
    ],
    series: [
      {
        "name": "2017",
        "data": [60, 30, 50, 100, 10, 90, 85]
      },
      {
        "name": "2018",
        "data": [20, 90, 60, 40, 100, 25, 65],
      },
      {
        "name": "2019",
        "data": [100, 20, 60, 90, 80, 10, 5]
      }
    ]
  };

  options: ILineChartOptions = {
    height: '250px',
    chartPadding: {
      left: -12,
      bottom: -15
    },
    fullWidth: true,
    showPoint: false,
    plugins: [
      ctLegends({
        position: 'bottom'
      })
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
