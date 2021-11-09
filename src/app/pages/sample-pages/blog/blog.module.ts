import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {BlogComponent} from "./blog.component";

const BLOG_ROUTE = [{path: '', component: BlogComponent}];

@NgModule({
    declarations: [BlogComponent],
    imports: [
        RouterModule.forChild(BLOG_ROUTE),
        CommonModule
    ]
})
export class BlogModule {
}
