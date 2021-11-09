import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ToolbarsComponent } from "./toolbars.component";

const TOOLBARS_ROUTE = [{ path: '', component: ToolbarsComponent }]

@NgModule({
  declarations: [
    ToolbarsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(TOOLBARS_ROUTE)
  ]
})
export class ToolbarsModule { }
