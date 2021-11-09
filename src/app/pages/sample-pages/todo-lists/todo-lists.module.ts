import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap";

import {TodoListsComponent} from "./todo-lists.component";

const TODO_LISTS_ROUTE = [{path: '', component: TodoListsComponent}];

@NgModule({
    declarations: [TodoListsComponent],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(TODO_LISTS_ROUTE)
    ]
})
export class TodoListsModule {
}
