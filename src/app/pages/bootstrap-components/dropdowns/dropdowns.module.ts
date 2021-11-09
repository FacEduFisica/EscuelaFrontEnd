import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DropdownsComponent } from "./dropdowns.component";

const DROPDOWNS_ROUTE = [{ path: '', component: DropdownsComponent }]

@NgModule({
  declarations: [
    DropdownsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(DROPDOWNS_ROUTE)
  ]
})
export class DropdownsModule { }
