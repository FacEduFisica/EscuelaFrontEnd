import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PopoverModule } from 'ngx-bootstrap/popover';

import { PopoverComponent } from "./popover.component";

const POPOVER_ROUTE = [{ path: '', component: PopoverComponent }]

@NgModule({
  declarations: [
    PopoverComponent
  ],
  imports: [
    CommonModule,
    PopoverModule.forRoot(),
    RouterModule.forChild(POPOVER_ROUTE)
  ]
})
export class PopoverPageModule { }
