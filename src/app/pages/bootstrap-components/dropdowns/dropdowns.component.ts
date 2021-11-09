import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent implements OnInit {
  pageTitle: string = 'Dropdowns';
  pageSubTitle: string = 'Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They’re made interactive with the included dropdown directives.';

  disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
