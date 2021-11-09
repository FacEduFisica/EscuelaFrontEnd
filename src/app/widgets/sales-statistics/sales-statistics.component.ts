import { Component, OnInit } from '@angular/core';
import {
    ILineChartOptions,
    IChartistData
} from 'chartist';
import { ChartType } from 'ng-chartist';
import * as ctLegends from 'chartist-plugin-legend/chartist-plugin-legend.js';

@Component({
  selector: 'widget-sales-statistics',
  templateUrl: 'sales-statistics.component.html'
})

export class SalesStatisticsComponent implements OnInit {
  widgetTitle: string = 'Sales Statistics'
  widgetSubTitle: string = 'Vestibulum purus quam scelerisque, mollis nonummy metus'

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
        "data": [90, 40, 80, 20, 90, 20, 60]
      },
      {
        "name": "2018",
        "data": [80, 30, 70, 10, 80, 10, 50],
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
    low: 0,
    showArea: true,
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
