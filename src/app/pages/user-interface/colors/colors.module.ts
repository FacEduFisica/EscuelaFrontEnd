import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ColorsComponent } from "./colors.component";

const COLORS_ROUTE = [{ path: '', component: ColorsComponent }]

@NgModule({
  declarations: [
      ColorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(COLORS_ROUTE)
  ]
})
export class ColorsModule { }
