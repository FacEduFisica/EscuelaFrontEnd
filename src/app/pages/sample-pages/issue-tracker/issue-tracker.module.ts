import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap";
import {TooltipModule} from 'ngx-bootstrap/tooltip';

import {IssueTrackerComponent} from "./issue-tracker.component";

const ISSUE_TRACKER_ROUTE = [{path: '', component: IssueTrackerComponent}];

@NgModule({
    declarations: [IssueTrackerComponent],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        RouterModule.forChild(ISSUE_TRACKER_ROUTE)
    ]
})
export class IssueTrackerModule {
}
