import { Component, OnInit } from '@angular/core';
import {AppService} from "../../app.service";


@Component({
  selector: 'widget-todo',
  templateUrl: 'todo.component.html'
})
export class TodoComponent implements OnInit {
  widgetTitle: string = 'Todo lists';
  widgetSubTitle: string = 'Venenatis portauam Inceptos ameteiam';
  todoLists: any[];
  todoListActions: any[];

  constructor(private service: AppService) {
    this.todoLists = service.todoLists;
    this.todoListActions = service.todoListActions;
  }

  ngOnInit() {
  }

}
