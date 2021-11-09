import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {InputFloatModule} from "../../../directive/input-float/input-float.module";

import {LockscreenComponent} from "./lockscreen.component";

const LOCKSCREEN_PATH = [{path: '', component: LockscreenComponent}];

@NgModule({
    declarations: [
        LockscreenComponent
    ],
    imports: [
        CommonModule,
        InputFloatModule,
        RouterModule.forChild(LOCKSCREEN_PATH)
    ]
})
export class LockscreenModule {
}
