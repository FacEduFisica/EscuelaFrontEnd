import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
    pageTitle: string = 'Meet Our Team';
    pageSubTitle: string = 'Cras mattis consectetur purus sit amet fermentum donec id elit non mi porta gravida at eget metus.';

    teams: any[] = [
        {
            name: 'Jermaine S. Wilson',
            img: '4.jpg',
            post: 'Chairman / Chief Executive Officer',
            about: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leoquam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.',
            social: [
                {
                    platform: 'facebook',
                    color: 'indigo'
                },
                {
                    platform: 'twitter',
                    color: 'cyan'
                },
                {
                    platform: 'google',
                    color: 'red'
                }
            ]
        },
        {
            name: 'Kay C. Lowery',
            img: '2.jpg',
            post: 'Group CEO / Executive Director',
            about: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet.',
            social: [
                {
                    platform: 'facebook',
                    color: 'indigo'
                },
                {
                    platform: 'google',
                    color: 'red'
                }
            ]
        },
        {
            name: 'Linda R. Jarrett',
            img: '7.jpg',
            post: 'Non-Executive Director',
            about: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel augue.',
            social: [
                {
                    platform: 'facebook',
                    color: 'indigo'
                },
                {
                    platform: 'twitter',
                    color: 'cyan'
                }
            ]
        },
        {
            name: 'Jan J. Larrison',
            img: '3.jpg',
            post: 'Executive Director - Finance',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.',
            social: [
                {
                    platform: 'facebook',
                    color: 'indigo'
                },
                {
                    platform: 'twitter',
                    color: 'cyan'
                },
                {
                    platform: 'google',
                    color: 'red'
                }
            ]
        },
        {
            name: 'Kay C. Lowery',
            img: '5.jpg',
            post: 'Chief Technology Officer',
            about: 'Commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet.',
            social: [
                {
                    platform: 'twitter',
                    color: 'cyan'
                },
                {
                    platform: 'google',
                    color: 'red'
                }
            ]
        },
        {
            name: 'Bobbie D. Classen',
            img: '9.jpg',
            post: 'Director - After Sales Services',
            about: 'Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare veleuleo.',
            social: [
                {
                    platform: 'facebook',
                    color: 'indigo'
                },
                {
                    platform: 'twitter',
                    color: 'cyan'
                },
                {
                    platform: 'google',
                    color: 'red'
                }
            ]
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
