import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { DatepickerComponent } from "./datepicker.component";

const DATEPICKER_ROUTE = [{ path: '', component: DatepickerComponent }]

@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(DATEPICKER_ROUTE)
  ]
})
export class DatepickerModule { }
