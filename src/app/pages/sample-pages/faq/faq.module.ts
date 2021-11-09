import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {FaqComponent} from "./faq.component";

const FAQ_ROUTE = [{path: '', component: FaqComponent}];

@NgModule({
    declarations: [FaqComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(FAQ_ROUTE)
    ]
})
export class FaqModule {
}
