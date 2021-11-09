import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap";
import {InputFloatModule} from "../../../directive/input-float/input-float.module";

import { PasswordForgotComponent } from './password-forgot.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const PASSWORD_FORGOT_ROUTE = [{path: '', component: PasswordForgotComponent}];

@NgModule({
    declarations: [PasswordForgotComponent],
    imports: [       
        ReactiveFormsModule,
        CommonModule,
        BsDropdownModule.forRoot(),
        InputFloatModule,
        RouterModule.forChild(PASSWORD_FORGOT_ROUTE)
    ]
})
export class PasswordForgotModule {
}
