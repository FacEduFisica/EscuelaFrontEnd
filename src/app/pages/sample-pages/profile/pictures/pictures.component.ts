import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: 'pictures.component.html'
})
export class PicturesComponent implements OnInit {
  picturesItems = new Array(24); // Number of pictures currently available is 24

  constructor() { }

  ngOnInit() {
  }

}
