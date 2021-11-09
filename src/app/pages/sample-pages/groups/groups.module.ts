import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {GroupsComponent} from "./groups.component";

const GROUPS_ROUTE = [{path: '', component: GroupsComponent}];

@NgModule({
    declarations: [GroupsComponent],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(GROUPS_ROUTE)
    ]
})
export class GroupsModule {
}