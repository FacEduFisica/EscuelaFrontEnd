import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { CollapseComponent } from "./collapse.component";

const COLLAPSE_ROUTE = [{ path: '', component: CollapseComponent }]

@NgModule({
  declarations: [
    CollapseComponent
  ],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    RouterModule.forChild(COLLAPSE_ROUTE)
  ]
})
export class CollapsePageModule { }
