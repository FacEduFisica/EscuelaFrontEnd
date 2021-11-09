import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap";

import {TodoComponent} from "./todo.component";

@NgModule({
    declarations: [TodoComponent],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule,
    ],
    exports: [
        TodoComponent
    ]
})
export class TodoModule {
}
