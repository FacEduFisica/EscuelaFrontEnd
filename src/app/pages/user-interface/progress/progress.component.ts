import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {
  pageTitle: string = 'Progress';
  pageSubTitle: string = `Use Bootstrap's custom progress component for displaying simple or complex progress bars.`;

  constructor() { }

  ngOnInit() {
  }

}
