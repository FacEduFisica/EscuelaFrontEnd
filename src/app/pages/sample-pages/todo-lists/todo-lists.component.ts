import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../app.service";

@Component({
    selector: 'app-todo-lists',
    templateUrl: './todo-lists.component.html',
    styleUrls: ['./todo-lists.component.scss']
})
export class TodoListsComponent implements OnInit {
    pageTitle: string = 'Todo Lists';
    pageSubTitle: string = 'Donec idelit nonmi porta gravida at eget metus';

    todoLists: any[];
    todoListActions: any[];
    todoSearch: boolean = false;
    todoLabelTitle: string = 'Labels';
    todoLabelSubTitle: string = 'Etiam porta malesuada magna mollis';
    todoLabels: any[] = [
        'Messages',
        'Clients',
        'Server',
        'Marketing',
        'Work related',
        'Website',
        'Uncategorized',
        'Collegues',
        'Hosting',
        'Design',
        'To be addressed',
        'Bug',
        'Severe',
        'Others'
    ];

    constructor(private service: AppService) {
        this.todoLists = service.todoLists;
        this.todoListActions = service.todoListActions;
    }

    ngOnInit() {
    }

}
