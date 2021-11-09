import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  pageTitle: string = 'Jumbotron';
  pageSubTitle: string = 'A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site.';

  constructor() { }

  ngOnInit() {
  }

}
