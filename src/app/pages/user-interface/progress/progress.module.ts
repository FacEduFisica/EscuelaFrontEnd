import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ProgressComponent } from "./progress.component";

const PROGRESS_ROUTE = [{ path: '', component: ProgressComponent }]

@NgModule({
  declarations: [
      ProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PROGRESS_ROUTE)
  ]
})
export class ProgressModule { }
