import { Component, OnInit } from '@angular/core';
import {
    IPieChartOptions,
    IChartistData
} from 'chartist';
import { ChartType } from 'ng-chartist';
import * as ctLegends from 'chartist-plugin-legend/chartist-plugin-legend.js';

@Component({
  selector: 'chart-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {
  chartTitle: string = 'Gauge chart'
  chartSubTitle: string = 'This pie chart uses total, startAngle, donut and donutSolid to draw a gauge chart.'

  type: ChartType = 'Pie';
  data: IChartistData = {
    series: [20, 10, 30, 40],
    labels: ['2016', '2017', '2018', '2019']
  };

  options: IPieChartOptions = {
    showLabel: false,
    donut: true,
    donutWidth: 60,
    donutSolid: true,
    startAngle: 270,
    total: 200,
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
