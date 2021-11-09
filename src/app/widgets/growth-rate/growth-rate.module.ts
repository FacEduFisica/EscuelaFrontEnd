import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartistModule} from "ng-chartist";

import {GrowthRateComponent} from "./growth-rate.component";

@NgModule({
    declarations: [
        GrowthRateComponent
    ],
    imports: [
        CommonModule,
        ChartistModule
    ],
    exports: [
        GrowthRateComponent
    ]
})
export class GrowthRateModule {
}
