import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent implements OnInit {
  pageTitle: string = 'Navs';
  pageSubTitle: string = 'Navigation available in Bootstrap share general markup and styles, from the base <code>.nav</code> class to the active and disabled states. Swap modifier classes to switch between each style.';

  constructor() { }

  ngOnInit() {
  }

}
