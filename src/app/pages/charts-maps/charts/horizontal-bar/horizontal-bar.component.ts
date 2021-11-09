import { Component, OnInit } from '@angular/core';
import {
    IBarChartOptions,
    IChartistData
} from 'chartist';
import { ChartType } from 'ng-chartist';
import * as ctLegends from 'chartist-plugin-legend/chartist-plugin-legend.js';

@Component({
  selector: 'chart-horizontal-bar',
  templateUrl: './horizontal-bar.component.html'
})
export class HorizontalBarComponent implements OnInit {
  chartTitle: string = 'Horizontal Bar chart'
  chartSubTitle: string = '2 series bar chart with horizontal bar position example.'

  type: ChartType = 'Bar';
  data: IChartistData = {
    labels: [
      '10',
      '20',
      '30',
      '40'
    ],
    series: [
      {
        "name": "2017",
        "data": [60, 30, 50, 100]
      },
      {
        "name": "2018",
        "data": [20, 90, 60, 40],
      }
    ]
  };

  options: IBarChartOptions = {
    height: '200px',
    chartPadding: {
      right: 20,
      left: -18,
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
    },
    axisX: {
      onlyInteger: true
    },
    horizontalBars: true
  };

  constructor() { }

  ngOnInit() {
  }

}
