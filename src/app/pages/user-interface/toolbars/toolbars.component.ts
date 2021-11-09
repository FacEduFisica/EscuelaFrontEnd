import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbars',
  templateUrl: './toolbars.component.html'
})
export class ToolbarsComponent implements OnInit {
  pageTitle: string = 'Toolbars';
  pageSubTitle: string = 'Toolbars are used as action headers to perform certain list of actions within a page with list of data.';
  toolbarSearch = false;
  toolbarSearch2 = false;
  toolbarSearch3 = false;
  toolbarSearch4 = false;

  constructor() { }

  ngOnInit() {
  }

}
