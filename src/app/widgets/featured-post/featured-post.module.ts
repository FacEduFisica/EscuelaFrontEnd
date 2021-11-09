import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FeaturedPostComponent } from "./featured-post.component";

@NgModule({
  declarations: [FeaturedPostComponent],
  imports: [CommonModule, RouterModule],
  exports: [FeaturedPostComponent]
})
export class FeaturedPostModule {}
