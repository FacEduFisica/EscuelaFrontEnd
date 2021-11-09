import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { PaginationComponent } from "./pagination.component";

const PAGINATION_ROUTE = [{ path: '', component: PaginationComponent }]

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PaginationModule.forRoot(),
    RouterModule.forChild(PAGINATION_ROUTE)
  ]
})
export class PaginationPageModule { }
