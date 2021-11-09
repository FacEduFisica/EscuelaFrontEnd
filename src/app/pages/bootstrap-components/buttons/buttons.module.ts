import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ButtonsComponent } from "./buttons.component";

const BUTTONS_COMPONENT_ROUTE = [{ path: '', component: ButtonsComponent }]

@NgModule({
  declarations: [
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule.forRoot(),
    RouterModule.forChild(BUTTONS_COMPONENT_ROUTE)
  ]
})
export class ButtonsComponentModule { }
