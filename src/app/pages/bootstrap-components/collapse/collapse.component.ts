import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent implements OnInit {
  pageTitle: string = 'Collapse';
  pageSubTitle: string = 'Collapse component allows you to toggle content on your pages with a bit of JavaScript and some classes.';
  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
