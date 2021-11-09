import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { WidgetsComponent } from "./widgets.component";

import { QuickStatsModule } from "../../widgets/quick-stats/quick-stats.module";
import { SalesStatisticsModule } from "../../widgets/sales-statistics/sales-statistics.module";
import { GrowthRateModule } from "../../widgets/growth-rate/growth-rate.module";
import { FeaturedPostModule } from "../../widgets/featured-post/featured-post.module";
import { TodoModule } from "../../widgets/todo/todo.module";
import { VisitorsModule } from "../../widgets/visitors/visitors.module";
import { PastDaysModule } from "../../widgets/past-days/past-days.module";
import { RecentPostsModule } from "../../widgets/recent-posts/recent-posts.module";
import { PieGridsModule } from "../../widgets/pie-grids/pie-grids.module";
import { SignupsModule } from "../../widgets/signups/signups.module";
import { PhotosModule } from "../../widgets/photos/photos.module";
import { RatingsModule } from "../../widgets/ratings/ratings.module";
import { TasksModule } from "src/app/widgets/tasks/tasks.module";
import { ContactModule } from 'src/app/widgets/contact/contact.module';

const WIDGETS_ROUTE = [{ path: "", component: WidgetsComponent }];

@NgModule({
    declarations: [WidgetsComponent],
    imports: [
        CommonModule,
        QuickStatsModule,
        SalesStatisticsModule,
        GrowthRateModule,
        FeaturedPostModule,
        TodoModule,
        VisitorsModule,
        PastDaysModule,
        RecentPostsModule,
        PieGridsModule,
        SignupsModule,
        PhotosModule,
        RatingsModule,
        TasksModule,
        ContactModule,
        RouterModule.forChild(WIDGETS_ROUTE)
    ]
})
export class WidgetsModule { }
