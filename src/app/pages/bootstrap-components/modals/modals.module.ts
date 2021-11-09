import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ModalModule } from 'ngx-bootstrap/modal';

import { ModalsComponent } from "./modals.component";

const MODALS_ROUTE = [{ path: '', component: ModalsComponent }]

@NgModule({
  declarations: [
    ModalsComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    RouterModule.forChild(MODALS_ROUTE)
  ]
})
export class ModalsModule { }
