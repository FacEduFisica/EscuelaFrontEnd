import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { BredcrumbsComponent } from "./bredcrumbs.component";

const BADGES_ROUTE = [{ path: '', component: BredcrumbsComponent }]

@NgModule({
  declarations: [
    BredcrumbsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BADGES_ROUTE)
  ]
})
export class BredcrumbsModule { }
