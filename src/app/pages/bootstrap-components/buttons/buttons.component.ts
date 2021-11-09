import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {
  pageTitle: string = 'Buttons';
  pageSubTitle: string = 'There are two directives that can make a group of buttons behave like a set of checkboxes, radio buttons, or a hybrid where radio buttons can be unchecked.';

  singleToggle: any = '1';
  checkbox: any = {
    left: false,
    middle: true, right: false
  };
  radio: any = 'middle';

  constructor() { }

  ngOnInit() {
  }

}
