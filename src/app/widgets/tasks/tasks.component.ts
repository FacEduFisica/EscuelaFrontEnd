import { Component, OnInit } from "@angular/core";

@Component({
  selector: "widget-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {
  pageTitle: string = 'Ongoing Tasks';
  pageSubTitle: string = 'Maecenas seddiam eget risusvarius blandit';

  tasks: any = [
    {
      name: 'HTML5 Validation Report',
      completed: 75,
      color: 'blue'
    },
    {
      name: 'Google Chrome Extension',
      completed: 43,
      color: 'amber'
    },
    {
      name: 'Social Intranet Projects',
      completed: 20,
      color: 'green'
    },
    {
      name: 'Bootstrap Admin Template',
      completed: 60,
      color: 'red'
    },
    {
      name: 'Youtube Client App',
      completed: 80,
      color: 'cyan'
    }
  ];

  constructor() {}

  ngOnInit() {}
}