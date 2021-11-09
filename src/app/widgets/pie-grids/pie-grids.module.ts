import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PieGridsComponent} from "./pie-grids.component";

@NgModule({
    declarations: [PieGridsComponent],
    imports: [
        CommonModule
    ],
    exports: [
        PieGridsComponent
    ]
})
export class PieGridsModule {
}
