import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  pageTitle: string = 'Modals';
  pageSubTitle: string = 'Modals are streamlined, but flexible, dialog prompts with the minimum required functionality and smart defaults.';

  constructor() {}

  ngOnInit() {
  }

}
