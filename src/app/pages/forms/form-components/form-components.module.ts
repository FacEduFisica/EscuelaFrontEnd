import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask'
import { AutosizeModule } from 'ngx-autosize';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { Ng5SliderModule } from 'ng5-slider';
import { QuillModule } from 'ngx-quill'

import { FormComponentsComponent } from "./form-components.component";

const FORM_COMPONENTS_ROUTE = [{ path: '', component: FormComponentsComponent }]

@NgModule({
  declarations: [
    FormComponentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FORM_COMPONENTS_ROUTE),
    NgxMaskModule.forRoot(),
    AutosizeModule,
    NgSelectModule,
    DropzoneModule,
    Ng5SliderModule,
    QuillModule
  ]
})
export class FormComponentsModule { }
