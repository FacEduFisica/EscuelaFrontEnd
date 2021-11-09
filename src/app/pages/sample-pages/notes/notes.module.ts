import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap";
import {LineTruncationLibModule} from "ngx-line-truncation";
import {ModalModule} from 'ngx-bootstrap/modal';
import {QuillModule} from 'ngx-quill'

import {NotesComponent} from "./notes.component";

const NOTES_ROUTE = [{path: '', component: NotesComponent}];

@NgModule({
    declarations: [NotesComponent],
    imports: [
        CommonModule,
        LineTruncationLibModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        QuillModule,
        RouterModule.forChild(NOTES_ROUTE)
    ]
})
export class NotesModule {
}
