import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { TimepickerComponent } from "./timepicker.component";

const TIMEPICKER_ROUTE = [{ path: '', component: TimepickerComponent }]

@NgModule({
  declarations: [
    TimepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TimepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    RouterModule.forChild(TIMEPICKER_ROUTE)
  ]
})
export class TimepickerPageModule { }
