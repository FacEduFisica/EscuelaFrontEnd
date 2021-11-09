import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap";
import {InputFloatModule} from "../../../directive/input-float/input-float.module";

import { PasswordResetComponent } from './password-reset.component';
import { ReactiveFormsModule } from '@angular/forms';

const PASSWORD_RESET_ROUTE = [{path: '', component: PasswordResetComponent}];

@NgModule({
    declarations: [PasswordResetComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        BsDropdownModule.forRoot(),
        InputFloatModule,
        RouterModule.forChild(PASSWORD_RESET_ROUTE)
    ]
})
export class PasswordResetModule {
}
