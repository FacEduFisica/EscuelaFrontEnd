import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ButtonsComponent } from "./buttons.component";

const BUTTONS_ROUTE = [{ path: '', component: ButtonsComponent }]

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(BUTTONS_ROUTE)

  ]
})
export class ButtonsModule { }
