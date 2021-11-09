import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-issue-tracker',
    templateUrl: './issue-tracker.component.html',
    styleUrls: ['./issue-tracker.component.scss']
})
export class IssueTrackerComponent implements OnInit {
    pageTitle: string = 'Issue Tracker';

    issueTrackerSearch: boolean = false;
    issueTrackerPages: number = 6;
    issueTrackers: any[] = [
        {
            id: '148',
            title: 'Ed porta ut justo vitae volutpat. Aliquam varius tortornon egestas blandit. Fusce in sem lectus',
            timeSince: '2 Days',
            op: {
                img: '2.jpg',
                name: 'Louie Holmes'
            },
            tag: {
                name: 'Issue',
                color: 'red'
            },
            date: '17/11/2017',
            time: '12:33',
            comments: '04',
        },
        {
            id: '132',
            title: 'Dulla vel metus scelerisque ante sollicitudin commodopurus odio',
            timeSince: 'Yesterday',
            op: {
                img: '3.jpg',
                name: 'Joseph Hamilton'
            },
            tag: {
                name: 'Suggestion',
                color: 'blue'
            },
            date: '19/11/2017',
            time: '09:01',
            comments: '23',
        },
        {
            id: '130',
            title: 'Nunc dictum tortor nec orci tempor vehicula. Curabitur bibendum non dolor vel hendrerit',
            op: {
                cap: 'K',
                name: 'Kason Sawyer',
                color: 'amber'
            },
            tag: {
                name: 'Optimization',
                color: 'green'
            },
            date: '10/11/2017',
            time: '15:13',
            comments: '01',
        },
        {
            id: '129',
            title: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
            op: {
                cap: 'T',
                name: 'Theodore Cotton',
                color: 'light-blue'
            },
            tag: {
                name: 'Issue',
                color: 'red'
            },
            date: '05/11/2017',
            time: '19:00',
            comments: '14',
        },
        {
            id: '128',
            title: 'Suspendisse aliquet dapibus ornare',
            op: {
                img: '1.jpg',
                name: 'Gary Schneider'
            },
            tag: {
                name: 'Issue',
                color: 'red'
            },
            date: '22/10/2017',
            time: '01:54',
            comments: '00',
        },
        {
            id: '125',
            title: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
            op: {
                cap: 'J',
                name: 'Jonathan Kelly',
                color: 'light-green'
            },
            tag: {
                name: 'Discussion',
                color: 'orange'
            },
            date: '12/09/2017',
            time: '22:59',
            comments: '18',
        },
        {
            id: '124',
            title: 'Maecenas accumsan risus et enim tincidunt',
            op: {
                img: '5.jpg',
                name: 'Samuel Doyle'
            },
            tag: {
                name: 'Optimization',
                color: 'green'
            },
            date: '12/09/2017',
            time: '02:50',
            comments: '02',
        },
        {
            id: '120',
            title: 'Morbi sit amet nunc a nunc venenatis sagittis vitae lacinia dolor',
            op: {
                img: '6.jpg',
                name: 'Isaac Francis'
            },
            tag: {
                name: 'Version 2.0',
                color: 'cyan'
            },
            date: '30/08/2017',
            time: '01:32',
            comments: '10',
        },
        {
            id: '118',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quis metus non placerat. Aenean vestibulum, dolor nec tempus consectetur',
            op: {
                img: '7.jpg',
                name: 'Anders Gould'
            },
            tag: {
                name: 'Discussion',
                color: 'orange'
            },
            date: '10/07/2017',
            time: '01:11',
            comments: '22',
        },
        {
            id: '100',
            title: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos',
            op: {
                cap: 'L',
                name: 'Leo Macdonald',
                color: 'purple'
            },
            tag: {
                name: 'Future',
                color: 'indigo'
            },
            date: '10/07/2017',
            time: '01:11',
            comments: '15',
        }
    ];
    issueTrackerActions: any[] = [
        'Respond',
        'Close',
        'Edit',
        'Delete'
    ];
    constructor() {
    }

    ngOnInit() {
    }

}
