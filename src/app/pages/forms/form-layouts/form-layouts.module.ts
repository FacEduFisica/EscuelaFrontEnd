import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FormLayoutsComponent } from "./form-layouts.component";

const FORM_LAYOUT_ROUTE = [{ path: '', component: FormLayoutsComponent }]

@NgModule({
  declarations: [
      FormLayoutsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FORM_LAYOUT_ROUTE)
  ]
})
export class FormLayoutsModule { }
