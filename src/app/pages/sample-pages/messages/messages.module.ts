import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {NgScrollbarModule} from "ngx-scrollbar";
import {BsDropdownModule} from "ngx-bootstrap";

import {MessagesComponent} from "./messages.component";

const MESSAGES_ROUTE = [{path: '', component: MessagesComponent}];

@NgModule({
    declarations: [MessagesComponent],
    imports: [
        CommonModule,
        NgScrollbarModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(MESSAGES_ROUTE)
    ]
})
export class MessagesModule {
}
