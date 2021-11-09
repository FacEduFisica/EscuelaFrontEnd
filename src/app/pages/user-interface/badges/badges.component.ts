import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
  pageTitle: string = 'Badges';
  pageSubTitle: string = 'Small and adaptive tag for adding context to just about any content.';

  constructor() { }

  ngOnInit() {
  }

}
