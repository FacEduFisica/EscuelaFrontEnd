import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormElementsComponent } from "./form-elements.component";

const FORM_ELEMENTS_ROUTE = [{ path: '', component: FormElementsComponent }]

@NgModule({
  declarations: [
      FormElementsComponent
  ],
  imports: [
      CommonModule,
      RouterModule.forChild(FORM_ELEMENTS_ROUTE)
  ]
})
export class FormElementsModule {}
