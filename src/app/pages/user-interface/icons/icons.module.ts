import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { IconsComponent } from "./icons.component";

const ICONS_ROUTE = [{ path: '', component: IconsComponent }]

@NgModule({
  declarations: [
    IconsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ICONS_ROUTE)
  ]
})
export class IconsModule { }
