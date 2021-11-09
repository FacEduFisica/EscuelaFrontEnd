import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent implements OnInit {
  pageTitle: string = 'Timepicker';
  pageSubTitle: string = 'A lightweight & configurable timepicker directive.';

  timeBasic: Date = new Date();
  timeBasic2: Date = new Date();
  timeBasic3: Date = new Date();
  isMeridian: boolean = true;
  showSpinners: boolean = true;

  hSteps: any = '1';
  mSteps: any = '1';
  sSteps: any = '1';

  toggleMode(): void {
    this.isMeridian = !this.isMeridian;
  }

  toggleSpinners(): void {
    this.showSpinners = !this.showSpinners;
  }

  constructor() { }

  ngOnInit() {
  }

}
