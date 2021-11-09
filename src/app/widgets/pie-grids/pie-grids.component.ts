import { Component, OnInit } from "@angular/core";

@Component({
  selector: "widget-pie-grids",
  templateUrl: "pie-grids.component.html",
  styleUrls: ["pie-grids.component.scss"]
})
export class PieGridsComponent implements OnInit {
  pieGridData: Array<any> = [
    {
      task: "Email Scheduled",
      completed: 92
    },
    {
      task: "Email Bounced",
      completed: 11
    },
    {
      task: "Email Opened",
      completed: 52
    },
    {
      task: "Storage Remaining",
      completed: 44
    },
    {
      task: "Web Page Views",
      completed: 78
    },
    {
      task: "Server Processing",
      completed: 32
    }
  ];

  constructor() {}

  ngOnInit() {}
}
