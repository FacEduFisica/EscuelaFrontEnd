import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'widget-signups',
    templateUrl: './signups.component.html',
    styleUrls: ['./signups.component.scss']
})
export class SignupsComponent implements OnInit {
    signUps: any[] = [
        {
            name: 'Jani Popovich',
            img: '1.jpg'
        },
        {
            name: 'Rosina Lamont',
            cap: 'R'
        },
        {
            name: 'Wave Vermeulen',
            cap: 'W'
        },
        {
            name: 'Delisa Sheilds',
            img: '2.jpg'
        },
        {
            name: 'Elsy Wilhoit',
            img: '3.jpg'
        },
        {
            name: 'Deanne Jeffreys',
            cap: 'D'
        },
        {
            name: 'Henry Johns',
            cap: 'H'
        },
        {
            name: 'Shery Heredia',
            cap: 'S'
        },
        {
            name: 'Gaylord Coolbaugh',
            cap: 'G'
        },
        {
            name: 'Lyda Wortman',
            cap: 'L'
        },
        {
            name: 'Corene Langstaff',
            img: '4.jpg'
        },
        {
            name: 'Aracely Goudeau',
            img: '5.jpg'
        },
        {
            name: 'Matilde Weibel',
            cap: 'M'
        },
        {
            name: 'Clement Mayor',
            cap: 'C'
        },
        {
            name: 'Phil Wyatt',
            cap: 'P'
        },
        {
            name: 'Altagracia Manke',
            cap: 'A'
        },
        {
            name: 'Siu Derosier',
            cap: 'S'
        },
        {
            name: 'Nigel Shipe',
            img: '6.jpg'
        },
        {
            name: 'Bossman',
            cap: 'B'
        },
        {
            name: 'Crystal Markel',
            cap: 'C'
        },
        {
            name: 'Noman Nottage',
            cap: 'N'
        },
        {
            name: 'Melonie Carreira',
            img: '8.jpg'
        },
        {
            name: 'Shaneka Hoyle',
            cap: 'S'
        },
        {
            name: 'Milagro Evans',
            cap: 'M'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
