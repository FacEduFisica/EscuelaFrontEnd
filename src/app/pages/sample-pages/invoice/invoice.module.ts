import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {InvoiceComponent} from "./invoice.component";

const INVOICE_ROUTE = [{path: '', component: InvoiceComponent}];

@NgModule({
    declarations: [InvoiceComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(INVOICE_ROUTE)
    ]
})
export class InvoiceModule {
}
