import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {
  pageTitle: string = 'Popover';
  pageSubTitle: string = 'Add small overlay content, like those found in iOS, to any element for housing secondary information.';

  constructor() { }

  ngOnInit() {
  }

}
