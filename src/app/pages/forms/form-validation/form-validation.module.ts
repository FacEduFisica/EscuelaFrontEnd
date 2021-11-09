import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { FormValidationComponent } from "./form-validation.component";

const FORM_VALIDATION_ROUTE = [{ path: '', component: FormValidationComponent }]

@NgModule({
  declarations: [
      FormValidationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(FORM_VALIDATION_ROUTE)
  ]
})
export class FormValidationModule { }
