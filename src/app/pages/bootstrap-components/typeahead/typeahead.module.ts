import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

import { TypeaheadComponent } from "./typeahead.component";

const TYPEAHEAD_ROUTE = [{ path: '', component: TypeaheadComponent }]

@NgModule({
  declarations: [
    TypeaheadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    RouterModule.forChild(TYPEAHEAD_ROUTE)
  ]
})
export class TypeaheadPageModule { }
