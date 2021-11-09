import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {ChartistModule} from "ng-chartist";

import {ChartsComponent} from "./charts.component";
import {LineComponent} from "./line/line.component";
import {AreaComponent} from "./area/area.component";
import {BarComponent} from "./bar/bar.component";
import {HorizontalBarComponent} from "./horizontal-bar/horizontal-bar.component";
import {StackedBarComponent} from "./stacked-bar/stacked-bar.component";
import {PieComponent} from "./pie/pie.component";
import {DonutComponent} from "./donut/donut.component";
import {GaugeComponent} from "./gauge/gauge.component";

const CHARTS_ROUTE = [{path: "", component: ChartsComponent}];

@NgModule({
    declarations: [
        ChartsComponent,
        LineComponent,
        AreaComponent,
        BarComponent,
        HorizontalBarComponent,
        StackedBarComponent,
        PieComponent,
        DonutComponent,
        GaugeComponent
    ],
    imports: [CommonModule, ChartistModule, RouterModule.forChild(CHARTS_ROUTE)]
})
export class ChartsModule {
}
