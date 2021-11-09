import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JqvmapModule} from "../../directive/jqvmap/jqvmap.module";
import {VisitorsComponent} from "./visitors.component";

@NgModule({
    declarations: [
        VisitorsComponent
    ],
    imports: [
        CommonModule,
        JqvmapModule,
    ],
    exports: [
        VisitorsComponent
    ]
})
export class VisitorsModule {
}
