import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuickStatsComponent} from "./quick-stats.component";
import {ChartistModule} from "ng-chartist";

@NgModule({
    declarations: [
        QuickStatsComponent
    ],
    imports: [
        CommonModule,
        ChartistModule,
    ],
    exports: [
        QuickStatsComponent
    ]
})
export class QuickStatsModule {
}
