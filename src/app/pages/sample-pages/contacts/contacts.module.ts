import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";

import {ContactsComponent} from "./contacts.component";

const CONTACTS_ROUTE = [{path: '', component: ContactsComponent}];

@NgModule({
    declarations: [ContactsComponent],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(CONTACTS_ROUTE)
    ]
})
export class ContactsModule {
}
