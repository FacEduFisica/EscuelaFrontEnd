import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SortableModule } from 'ngx-bootstrap/sortable';

import { SortableComponent } from "./sortable.component";

const SORTABLE_ROUTE = [{ path: '', component: SortableComponent }]

@NgModule({
  declarations: [
    SortableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SortableModule.forRoot(),
    RouterModule.forChild(SORTABLE_ROUTE)
  ]
})
export class SortablePageModule { }
