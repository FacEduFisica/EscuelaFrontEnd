import { Component, OnInit } from '@angular/core';
import {
    IPieChartOptions,
    IChartistData
} from 'chartist';
import { ChartType } from 'ng-chartist';
import * as ctLegends from 'chartist-plugin-legend/chartist-plugin-legend.js';

@Component({
  selector: 'chart-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  chartTitle: string = 'Pie chart'
  chartSubTitle: string = 'This pie chart is configured with custom labels specified in the data object.'

  type: ChartType = 'Pie';
  data: IChartistData = {
    series: [20, 10, 30, 40],
    labels: ['2016', '2017', '2018', '2019']
  };

  options: IPieChartOptions = {
    showLabel: false,
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
