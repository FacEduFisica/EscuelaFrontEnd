import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {
  pageTitle: string = 'Colors';
  pageSubTitle: string = 'Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.';

  constructor() { }

  ngOnInit() {
  }

}
