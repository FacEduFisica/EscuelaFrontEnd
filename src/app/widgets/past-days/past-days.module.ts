import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartistModule} from "ng-chartist";

import {PastDaysComponent} from "./past-days.component";

@NgModule({
    declarations: [PastDaysComponent],
    imports: [
        CommonModule,
        ChartistModule
    ],
    exports: [
        PastDaysComponent
    ]
})
export class PastDaysModule {
}
