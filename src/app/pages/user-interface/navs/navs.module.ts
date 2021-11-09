import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NavsComponent } from "./navs.component";

const NAVS_ROUTE = [{ path: '', component: NavsComponent }]

@NgModule({
  declarations: [
    NavsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(NAVS_ROUTE)
  ]
})
export class NavsModule { }
