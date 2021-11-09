import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {FourZeroFourComponent} from "./four-zero-four.component";

const FOUR_ZERO_FOUR_ROUTE = [{path: '', component: FourZeroFourComponent}];

@NgModule({
    declarations: [FourZeroFourComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(FOUR_ZERO_FOUR_ROUTE)
    ]
})
export class FourZeroFourModule {
}
