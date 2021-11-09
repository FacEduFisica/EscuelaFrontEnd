import { Component, OnInit } from '@angular/core';
import {
    IPieChartOptions,
    IChartistData
} from 'chartist';
import { ChartType } from 'ng-chartist';
import * as ctLegends from 'chartist-plugin-legend/chartist-plugin-legend.js';

@Component({
  selector: 'chart-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {
  chartTitle: string = 'Donut chart'
  chartSubTitle: string = 'This pie chart uses donut and donutSolid to draw a donut chart.'

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
