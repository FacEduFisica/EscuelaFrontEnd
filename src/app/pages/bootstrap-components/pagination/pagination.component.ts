import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {
  pageTitle: string = 'Pagination';
  pageSubTitle: string = 'Provide pagination links for your site or app with the multi-page pagination component, or the simpler pager alternative.';

  totalItems: number = 64;
  currentPage: number = 4;

  constructor() { }

  ngOnInit() {
  }

}
