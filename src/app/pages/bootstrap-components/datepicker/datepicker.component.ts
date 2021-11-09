import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent implements OnInit {
  pageTitle: string = 'Datepicker';
  pageSubTitle: string = 'Datepicker is a highly configurable component that adds datepicker functionality to your pages. You can customize the date format and language, restrict the selectable date ranges.';

  bsValue: Date;
  bsValue2: Date;
  bsValueRange: Date[];
  bsInlineValue = new Date();
  bsConfig: Partial<BsDatepickerConfig> = {
    containerClass: 'date-picker'
  }

  constructor() { }

  ngOnInit() {
  }

}
