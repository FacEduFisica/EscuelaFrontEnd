import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnInit {
  pageTitle: string = 'Charts';
  pageSubTitle: string = `Material Admin uses Chartist.js for all it's charting needs. Since Chartist.js is a Javascript library, ng-chartist component is used to get the most out of it in this project`;

  constructor() { }

  ngOnInit() {
  }

}
