import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { CardsComponent } from "./cards.component";

const CARDS_ROUTE = [{ path: '', component: CardsComponent }]

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule.forChild(CARDS_ROUTE)
  ]
})
export class CardsModule { }
