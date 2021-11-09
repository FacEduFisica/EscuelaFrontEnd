import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit {
  title: string = 'Realtime Visitors';
  subTitle: string = 'Nullam dolor isnibh ultricies vehicula adipiscing';
  visitors24hour: number = 23528;
  visitors30mins: number = 746;

  map: any = {
    map: 'world_en',
    backgroundColor: '#fff',
    color: '#ebebeb',
    borderColor: '#ebebeb',
    hoverOpacity: 1,
    selectedColor: '#00BCD4',
    enableZoom: false,
    showTooltip: false,
    normalizeFunction: 'polynomial',
    selectedRegions: ['US', 'EN', 'NZ', 'CN', 'JP', 'SL', 'BR', 'AU'],
    onRegionClick: function (event) {
      event.preventDefault();
    }
  };

  visitosDate: Array<any> = [
    {
      date: 'Sunday, September 4, 21:44:02 (2 Mins 56 Seconds)',
      browser: 'Firefox',
      os: 'Mac OSX',
      country: 'United States',
      flag: 'United_States_of_America.png'
    },
    {
      date: 'Sunday, September 4, 20:21:01 (5 Mins 12 Seconds)',
      browser: 'Chrome',
      os: 'Android',
      country: 'Australia',
      flag: 'Australia.png'
    },
    {
      date: 'Sunday, September 4, 20:21:10 (10 Mins 43 Seconds)',
      browser: 'Edge',
      os: 'Windows',
      country: 'Brazil',
      flag: 'Brazil.png'
    },
    {
      date: 'Sunday, September 4, 20:59:04 (1 Min 02 Seconds)',
      browser: 'Chrome',
      os: 'Android',
      country: 'South Korea',
      flag: 'South_Korea.png'
    },
    {
      date: 'Sunday, September 4, 20:58:12 (3 Min 44 Seconds)',
      browser: 'Chrome',
      os: 'Windows',
      country: 'Japan',
      flag: 'Japan.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
