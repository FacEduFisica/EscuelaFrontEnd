import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {TeamComponent} from "../team/team.component";

const TEAM_ROUTE = [{path: '', component: TeamComponent}];

@NgModule({
    declarations: [TeamComponent],
    imports: [
        RouterModule.forChild(TEAM_ROUTE),
        CommonModule
    ]
})
export class TeamModule {
}
