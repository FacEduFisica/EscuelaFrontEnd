import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { JumbotronComponent } from "./jumbotron.component";

const JUMBOTRON_ROUTE = [{ path: '', component: JumbotronComponent }]

@NgModule({
  declarations: [
    JumbotronComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(JUMBOTRON_ROUTE)
  ]
})
export class JumbotronModule { }
