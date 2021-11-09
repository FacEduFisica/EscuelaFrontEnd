import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'widget-ratings',
    templateUrl: './ratings.component.html',
    styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
    widgetTitle: string = 'Average Rating 3.0';

    ratingsValue: any[] = [
        {
            star: 1,
            count: 30
        },
        {
            star: 2,
            count: 45
        },
        {
            star: 3,
            count: 60
        },
        {
            star: 4,
            count: 78
        },
        {
            star: 5,
            count: 22
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
