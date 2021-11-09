import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html'
})
export class AlertsComponent implements OnInit {
  pageTitle: string = 'Alerts';
  pageSubTitle: string = 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.';

  constructor() { }

  ngOnInit() {
  }

}
