import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {PhotosComponent} from "./photos.component";

@NgModule({
    declarations: [PhotosComponent],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        PhotosComponent
    ]
})
export class PhotosModule {
}
