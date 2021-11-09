import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {
  pageTitle: string = 'Carousel';
  pageSubTitle: string = 'A slide show component for cycling through element-images or slides of text-like a carousel. Nested carousels are not supported.';

  constructor() { }

  ngOnInit() {
  }

}
