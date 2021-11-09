import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'widget-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
    widgetTitle: string = 'Augue laoreet rutrum';
    widgetSubTitle: string = 'Cras congue nec lorem eget posuere';

    photos: any[] = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png',
        '9.png'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
