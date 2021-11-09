import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  pageTitle: string = 'Rating';
  pageSubTitle: string = 'Rating component that will take care of visualising a star rating bar';

  ratingModel: number = 5;

  overStar: number | undefined;

  hoveringOver(value: number): void {
    this.overStar = value;
  }

  resetStar(): void {
    this.overStar = void 0;
  }


  constructor() { }

  ngOnInit() {
  }

}
