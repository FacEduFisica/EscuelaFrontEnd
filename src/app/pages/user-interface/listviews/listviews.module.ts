import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ListviewsComponent } from "./listviews.component";

const LISTVIEW_ROUTE = [{ path: '', component: ListviewsComponent }]

@NgModule({
  declarations: [
    ListviewsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(LISTVIEW_ROUTE)
  ]
})
export class ListviewsModule { }
