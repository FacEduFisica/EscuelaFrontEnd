import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PaginationComponent } from "./pagination.component";

const PAGINATION_ROUTE = [{ path: '', component: PaginationComponent }]

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PAGINATION_ROUTE)
  ]
})
export class PaginationModule { }
