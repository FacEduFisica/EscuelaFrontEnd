import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html'
})
export class AlertsPageComponent implements OnInit {
  pageTitle: string = 'Alerts';
  pageSubTitle: string = 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.';

  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `You successfully read this important alert message.`
    },
    {
      type: 'info',
      msg: `This alert needs your attention, but it's not super important.`
    },
    {
      type: 'warning',
      msg: `Better check yourself, you're not looking too good.`
    },
    {
      type: 'danger',
      msg: `Change a few things up and try submitting again.`
    }
  ];
  alerts = this.defaultAlerts;

  reset(): void {
    this.alerts = this.defaultAlerts;
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  constructor() { }

  ngOnInit() {
  }

}
