import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TabsModule } from 'ngx-bootstrap/tabs';

import { TabsComponent } from "./tabs.component";

const TABS_ROUTE = [{ path: '', component: TabsComponent }]

@NgModule({
  declarations: [
    TabsComponent
  ],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    RouterModule.forChild(TABS_ROUTE)
  ]
})
export class TabsPageModule { }
