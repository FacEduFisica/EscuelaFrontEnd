import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {RecentPostsComponent} from "./recent-posts.component";

@NgModule({
    declarations: [RecentPostsComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        RecentPostsComponent
    ]
})
export class RecentPostsModule {
}
