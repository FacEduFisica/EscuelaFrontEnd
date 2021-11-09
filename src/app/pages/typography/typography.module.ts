import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

import { TypographyComponent } from './typography.component'

const TYPOGRAPHY_ROUTE = [{ path: "", component: TypographyComponent }];

@NgModule({
  declarations: [
    TypographyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(TYPOGRAPHY_ROUTE)
  ]
})
export class TypographyModule { }
