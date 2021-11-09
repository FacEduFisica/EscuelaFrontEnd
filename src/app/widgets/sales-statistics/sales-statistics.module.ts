import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartistModule} from "ng-chartist";

import {SalesStatisticsComponent} from "./sales-statistics.component";

@NgModule({
    declarations: [
        SalesStatisticsComponent
    ],
    imports: [
        CommonModule,
        ChartistModule
    ],
    exports: [
        SalesStatisticsComponent
    ]
})
export class SalesStatisticsModule {
}