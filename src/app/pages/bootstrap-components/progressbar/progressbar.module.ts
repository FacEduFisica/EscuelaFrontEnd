import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { ProgressbarComponent } from "./progressbar.component";

const PROGRESSBAR_ROUTE = [{ path: '', component: ProgressbarComponent }];

@NgModule({
  declarations: [
    ProgressbarComponent
  ],
  imports: [
    CommonModule,
    ProgressbarModule.forRoot(),
    RouterModule.forChild(PROGRESSBAR_ROUTE)
  ]
})
export class ProgressbarPageModule { }
