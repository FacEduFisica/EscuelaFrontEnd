import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AccordionsComponent } from "./accordions.component";

const ACCORDIONS_ROUTE = [{ path: '', component: AccordionsComponent }]

@NgModule({
  declarations: [
      AccordionsComponent
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    RouterModule.forChild(ACCORDIONS_ROUTE)
  ]
})
export class AccordionsModule { }
