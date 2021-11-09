import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { CarouselComponent } from "./carousel.component";

const CAROUSEL_ROUTE = [{ path: '', component: CarouselComponent }]

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    RouterModule.forChild(CAROUSEL_ROUTE)
  ]
})
export class CarouselPageModule { }
