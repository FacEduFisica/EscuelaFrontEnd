import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { BadgesComponent } from "./badges.component";

const BADGES_ROUTE = [{ path: '', component: BadgesComponent }]

@NgModule({
  declarations: [
    BadgesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(BADGES_ROUTE)
  ]
})
export class BadgesModule { }
