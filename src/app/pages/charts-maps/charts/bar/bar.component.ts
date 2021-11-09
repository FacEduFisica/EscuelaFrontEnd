import { Component, OnInit } from '@angular/core';
import {
    IBarChartOptions,
    IChartistData
} from 'chartist';
import { ChartType } from 'ng-chartist';
import * as ctLegends from 'chartist-plugin-legend/chartist-plugin-legend.js';

@Component({
  selector: 'chart-bar',
  templateUrl: './bar.component.html'
})
export class BarComponent implements OnInit {
  chartTitle: string = 'Bar chart'
  chartSubTitle: string = '3 series bar chart example.'

  type: ChartType = 'Bar';
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

  options: IBarChartOptions = {
    height: '200px',
    chartPadding: {
      left: -12,
      bottom: -15
    },
    onlyInteger: false,
    plugins: [
      ctLegends({
        position: 'bottom'
      })
    ],
    axisY: {
      onlyInteger: true
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
