import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { AlertsComponent } from "./alerts.component";

const ALERTS_ROUTE = [{ path: '', component: AlertsComponent }]

@NgModule({
  declarations: [
    AlertsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ALERTS_ROUTE)
  ]
})
export class AlertsModule { }
