import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tooltips',
    templateUrl: './tooltips.component.html',
    styleUrls: ['./tooltips.component.scss']
})
export class TooltipsComponent implements OnInit {
    pageTitle: string = 'Tooltip';
    pageSubTitle: string = 'Tooltips are an updated version, which don’t rely on images, uses CSS3 for animations, and much more.';

    constructor() {
    }

    ngOnInit() {
    }

}
