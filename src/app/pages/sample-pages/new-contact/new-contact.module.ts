import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';

import {NewContactComponent} from "./new-contact.component";

const NEW_CONTACT_ROUTE = [{path: '', component: NewContactComponent}];

@NgModule({
    declarations: [NewContactComponent],
    imports: [
        CommonModule,
        AutosizeModule,
        ReactiveFormsModule,
        RouterModule.forChild(NEW_CONTACT_ROUTE)
    ]
})
export class NewContactModule {
}
