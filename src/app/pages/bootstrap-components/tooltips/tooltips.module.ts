import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {TooltipModule} from 'ngx-bootstrap/tooltip';

import {TooltipsComponent} from "./tooltips.component";

const TOOLTIPS_ROUTE = [{path: '', component: TooltipsComponent}]

@NgModule({
    declarations: [
        TooltipsComponent
    ],
    imports: [
        CommonModule,
        TooltipModule.forRoot(),
        RouterModule.forChild(TOOLTIPS_ROUTE)
    ]
})
export class TooltipsPageModule {
}
