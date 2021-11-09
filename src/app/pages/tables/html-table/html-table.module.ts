import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { HtmlTableComponent } from "./html-table.component";

const HTML_TABLE_ROUTE = [{ path: "", component: HtmlTableComponent }];

@NgModule({
  declarations: [HtmlTableComponent],
  imports: [CommonModule, RouterModule.forChild(HTML_TABLE_ROUTE)]
})
export class HtmlTableModule {}
