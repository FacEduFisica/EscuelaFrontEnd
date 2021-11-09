import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {PricingTablesComponent} from "./pricing-tables.component";

const PRICING_TABLES_ROUTE = [{path: '', component: PricingTablesComponent}];

@NgModule({
    declarations: [PricingTablesComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(PRICING_TABLES_ROUTE)
    ]
})
export class PricingTablesModule {
}
