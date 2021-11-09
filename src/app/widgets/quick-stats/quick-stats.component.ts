import { Component, OnInit } from '@angular/core';
import { ILineChartOptions, IChartistData } from "chartist";
import { ChartType } from "ng-chartist"

@Component({
  selector: 'widget-quick-stats',
  templateUrl: 'quick-stats.component.html',
  styleUrls: ['quick-stats.component.scss']
})
export class QuickStatsComponent implements OnInit {
  quickStatsData: Array<any> = [
    {
      title: 'Total Website Traffics',
      number: '987,459',
      color: 'blue',
      chart: {
        series: [[6,4,8,6,5,6,7,8,1,5,9,5]]
      }
    },
    {
      title: 'Total Website Impressions',
      number: '356,785K',
      color: 'amber',
      chart: {
        series: [[4,7,6,2,5,3,8,6,6,4,8,6]]
      }
    },
    {
      title: 'Total Online Sales',
      number: '$58,778',
      color: 'purple',
      chart: {
        series: [[9,4,6,5,6,4,5,7,9,3,6,5]]
      }
    },
    {
      title: 'Total Support Tickets',
      number: '214',
      color: 'red',
      chart: {
        series: [[5,6,3,9,7,5,4,6,5,6,4,9]]
      }
    }
  ]

  // Chart
  type: ChartType = "Bar";
  options: ILineChartOptions = {
    height: "36px",
    width: "65px",
    showPoint: false,
    fullWidth: true,
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  };

  constructor() {}

  ngOnInit() {
  }
}
