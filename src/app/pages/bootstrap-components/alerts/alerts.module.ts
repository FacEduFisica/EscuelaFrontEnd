import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AlertModule } from 'ngx-bootstrap/alert';

import { AlertsPageComponent } from "./alerts.component";

const ALERTS_ROUTE = [{ path: '', component: AlertsPageComponent }];

@NgModule({
  declarations: [
      AlertsPageComponent
  ],
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    RouterModule.forChild(ALERTS_ROUTE)
  ]
})
export class AlertsPageModule { }
