import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RatingModule } from 'ngx-bootstrap/rating';

import { RatingComponent } from "./rating.component";

const RATING_ROUTE = [{ path: '', component: RatingComponent }]

@NgModule({
  declarations: [
    RatingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RatingModule.forRoot(),
    RouterModule.forChild(RATING_ROUTE)
  ]
})
export class RatingPageModule { }
