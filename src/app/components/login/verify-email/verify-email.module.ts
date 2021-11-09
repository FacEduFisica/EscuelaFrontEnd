import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap";
import {InputFloatModule} from "../../../directive/input-float/input-float.module";

import { VerifyEmailComponent } from './verify-email.component';

const VERIFY_ROUTE = [{path: '', component: VerifyEmailComponent}];

@NgModule({
    declarations: [VerifyEmailComponent],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        InputFloatModule,
        RouterModule.forChild(VERIFY_ROUTE)
    ]
})
export class VerifyEmailModule {
}
