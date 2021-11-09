import { Component, OnInit } from "@angular/core";
import { ILineChartOptions, IChartistData } from "chartist";
import { ChartType } from "ng-chartist";

@Component({
  selector: "widget-past-days",
  templateUrl: "past-days.component.html",
  styleUrls: ["past-days.component.scss"]
})
export class PastDaysComponent implements OnInit {
  widgetTitle: string = "For the past 30 days";
  widgetSubTitle: string = "Pellentesque ornare sem lacinia quam";
  pastData: Array<any> = [
    {
      title: "Page Views",
      amount: "47,896,536",
      chart: {
        series: [[6, 9, 5, 6, 3, 7, 5, 4, 6, 5, 6, 4, 2, 5, 8, 2, 6, 9]]
      }
    },
    {
      title: "Site Visitors",
      amount: "24,456,799",
      chart: {
        series: [[5, 7, 2, 5, 2, 8, 6, 7, 6, 5, 3, 1, 9, 3, 5, 8, 2, 4]]
      }
    },
    {
      title: "Total Clicks",
      amount: "13,965",
      chart: {
        series: [[5, 7, 2, 5, 2, 8, 6, 7, 6, 5, 3, 1, 9, 3, 5, 8, 2, 4]]
      }
    },
    {
      title: "Total Returns",
      amount: "198",
      chart: {
        series: [[3, 9, 1, 3, 5, 6, 7, 6, 8, 2, 5, 2, 7, 5, 6, 7, 6, 8]]
      }
    }
  ];

  // Chart Main
  typeMain: ChartType = "Line";
  dataMain: IChartistData = {
    labels: ["10", "20", "30", "40", "50", "60", "70"],
    series: [
      {
        name: "2017",
        data: [90, 40, 80, 20, 90, 30, 60]
      }
    ]
  };
  optionsMain: ILineChartOptions = {
    height: "150px",
    chartPadding: {
      left: 0,
      right: 0,
      bottom: 0
    },
    fullWidth: true,
    showArea: true,
    showLine: false,
    showPoint: false,
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

  // Chart Subs
  typeSub: ChartType = "Bar";
  optionsSub: ILineChartOptions = {
    height: "45px",
    width: "100px",
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

  ngOnInit() {}
}
