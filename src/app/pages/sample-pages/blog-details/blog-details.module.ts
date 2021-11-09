import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {BlogDetailsComponent} from "./blog-details.component";

const BLOG_DETAILS_ROUTE = [{path: '', component: BlogDetailsComponent}];

@NgModule({
    declarations: [BlogDetailsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(BLOG_DETAILS_ROUTE)
    ]
})
export class BlogDetailsModule {
}
