import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CrystalLightboxModule} from "@crystalui/angular-lightbox";

import {ProfileComponent} from "./profile.component";
import {AboutComponent} from "./about/about.component";
import {PicturesComponent} from "./pictures/pictures.component";
import {ContactsComponent} from "./contacts/contacts.component";

const PROFILE_ROUTE = [
    {
        path: '', component: ProfileComponent,
        children: [
            {
                path: '',
                redirectTo: 'about',
                pathMatch: 'full'
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'pictures',
                component: PicturesComponent
            },
            {
                path: 'contacts',
                component: ContactsComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        ProfileComponent,
        AboutComponent,
        PicturesComponent,
        ContactsComponent
    ],
    imports: [
        CommonModule,
        CrystalLightboxModule,
        RouterModule.forChild(PROFILE_ROUTE)
    ]
})
export class ProfileModule {
}
