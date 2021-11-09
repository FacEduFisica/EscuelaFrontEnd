import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-pricing-tables',
    templateUrl: './pricing-tables.component.html',
    styleUrls: ['./pricing-tables.component.scss']
})
export class PricingTablesComponent implements OnInit {
    sectionTitle: any = {
        1: {
            title: 'Pricing Table - 1',
            sub: '3 Column with highlighted item'
        },
        2: {
            title: 'Pricing Table - 2',
            sub: 'Basic 3 column pricing table'
        },
        3: {
            title: 'Pricing Table - 3',
            sub: 'Basic 4 column pricing table'
        }
    };

    pricingTables: any[] = [
        {
            title: 'Strawberry',
            sub: 'Pellentesque ornare lacinia venenatis vestibulum',
            price: '100.00',
            color: 'blue',
            features: [
                'In dapibus ipsum sit amet leo',
                'Vestibulum ut mauris tellus donec',
                'Purna lectus venenatis felis nonsemper',
                'Aliquam erat volutpat hasellus ultri'
            ]
        },
        {
            title: 'Raspberry',
            sub: 'Nullam dolor nibh ultricies vehicula utelit ornaresred',
            price: '250.00',
            color: 'red',
            features: [
                'Morbi leo risus porta acconseetur',
                'Nullam quis risus eget urna mollis ornare',
                'Purna lectus venenatis felis nonsemper',
                'Aenean ellentesque ornare sem lacinia'
            ]
        },
        {
            title: 'Cranberry',
            sub: 'Vivamus sagittis lacus augue laoreet rutrum faucibus',
            price: '300.00',
            color: 'purple',
            features: [
                'Duis mollis estnon commodo luctus',
                'Vivamus sagittis lacus augue laoreeterest',
                'Etiam porta malesuada mollis euismod',
                'Praesent commodo magnanisl consec'
            ]
        },
        {
            title: 'Blueberry',
            sub: 'Pellentesque ornare lacinia venenatis vestibulum',
            price: '500.00',
            color: 'teal',
            features: [
                'In dapibus ipsum sit amet leo',
                'Vestibulum ut mauris tellus donec',
                'Etiam porta malesuada mollis euismod',
                'Purna lectus venenatis felis nonsemper'
            ]
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
