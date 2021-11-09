import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";

import {HomeComponent} from "./home.component";

import {VisitorsModule} from "../../widgets/visitors/visitors.module";
import {QuickStatsModule} from "../../widgets/quick-stats/quick-stats.module";
import {SalesStatisticsModule} from "../../widgets/sales-statistics/sales-statistics.module";
import {GrowthRateModule} from "../../widgets/growth-rate/growth-rate.module";
import {FeaturedPostModule} from "../../widgets/featured-post/featured-post.module";
import {TodoModule} from "../../widgets/todo/todo.module";
import {PastDaysModule} from "../../widgets/past-days/past-days.module";
import {RecentPostsModule} from "../../widgets/recent-posts/recent-posts.module";
import {PieGridsModule} from "../../widgets/pie-grids/pie-grids.module";

const HOME_ROUTE = [{path: "", component: HomeComponent}];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        QuickStatsModule,
        SalesStatisticsModule,
        GrowthRateModule,
        FeaturedPostModule,
        TodoModule,
        PastDaysModule,
        RecentPostsModule,
        VisitorsModule,
        PieGridsModule,
        RouterModule.forChild(HOME_ROUTE),
        BsDropdownModule.forRoot()
    ]
})
export class HomeModule {
}
