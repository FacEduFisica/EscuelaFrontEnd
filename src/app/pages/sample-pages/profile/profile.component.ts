import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.scss']
})
export class ProfileComponent implements OnInit {
    profileInfo: any = {
        name: 'Malinda Hollaway',
        profession: 'Web/UI Developer',
        location: 'Edinburgh, Scotland',
        img: './assets/demo/img/contacts/2.jpg',
        summary: 'Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magnae tiam porta sem malesuada magna mollis euismod.',
        contacts: [
            {
                icon: 'phone',
                value: '308-360-8938'
            },
            {
                icon: 'email',
                value: 'malinda@inbound.plus'
            },
            {
                icon: 'twitter',
                value: '@mallinda-hollaway'
            }
        ]
    };

    profileSearch: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

}
