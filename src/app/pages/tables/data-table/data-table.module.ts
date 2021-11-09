import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';

import { DataTableComponent } from './data-table.component';

const DATA_TABLE_ROUTE = [{ path: '', component: DataTableComponent }]

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    RouterModule.forChild(DATA_TABLE_ROUTE),
  ]
})
export class DataTableModule { }
