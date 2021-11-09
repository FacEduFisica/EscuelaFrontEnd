import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';

import {RatingsComponent} from "./ratings.component";

@NgModule({
    declarations: [RatingsComponent],
    imports: [
        CommonModule,
        RouterModule,
        ProgressbarModule.forRoot()
    ],
    exports: [
        RatingsComponent
    ]
})
export class RatingsModule {
}
