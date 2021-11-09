import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {SearchResultsComponent} from "./search-results.component";

const SEARCH_RESULTS_PAGE = [{path: '', component: SearchResultsComponent}];

@NgModule({
    declarations: [SearchResultsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(SEARCH_RESULTS_PAGE)
    ]
})
export class SearchResultsModule {
}
