import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {MapsComponent} from "./maps.component";
import {JqvmapModule} from "../../../directive/jqvmap/jqvmap.module";

const MAPS_ROUTE = [{ path: '', component: MapsComponent }]

@NgModule({
    declarations: [
        MapsComponent,
    ],
    imports: [
        CommonModule,
        JqvmapModule,
        RouterModule.forChild(MAPS_ROUTE)
    ]
})
export class MapsModule {
}
