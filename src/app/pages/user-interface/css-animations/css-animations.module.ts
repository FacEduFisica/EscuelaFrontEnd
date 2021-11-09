import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { CssAnimationsComponent } from "./css-animations.component";

const CSS_ANIMATIONS_ROUTE = [{ path: '', component: CssAnimationsComponent }]

@NgModule({
  declarations: [
    CssAnimationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(CSS_ANIMATIONS_ROUTE)
  ]
})
export class CssAnimationsModule { }
