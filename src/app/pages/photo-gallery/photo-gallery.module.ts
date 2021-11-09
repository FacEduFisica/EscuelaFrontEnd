import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import {BsDropdownModule} from "ngx-bootstrap";

import {PhotoGalleryComponent} from "./photo-gallery.component";

const PHOTO_GALLERY_ROUTE = [{path: '', component: PhotoGalleryComponent}]

@NgModule({
    declarations: [PhotoGalleryComponent],
    imports: [
        CommonModule,
        CrystalLightboxModule,
        BsDropdownModule.forRoot(),
        RouterModule.forChild(PHOTO_GALLERY_ROUTE)
    ]
})
export class PhotoGalleryModule {
}
