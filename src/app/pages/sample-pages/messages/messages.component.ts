import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
    pageTitle: string = 'Messages';

    messagesSearch: boolean = false;
    messageContent: any = {
        user: 'Malinda Hollaway',
        recipient: {
            name: 'Sharah Conor',
            img: '1.jpg'
        },
        conversation: [
            {
                type: 'recieved',
                messages: [
                    'Quisque consequat arcu eget odio cursus, ut tempor arcu vestibulum. Etiam ex arcu, porta a urna non, lacinia pellentesque orci. Proin semper sagittis erat, eget condimentum sapien viverra et. Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.'
                ],
                date: '20/04/2019',
                time: '09:00'
            },
            {
                type: 'sent',
                messages: [
                    'Mauris volutpat magna nibh, et condimentum est rutrum a. Nunc sed turpis mi. In eu massa a sem pulvinar lobortis.',
                    'Nunc sed turpis mi. In eu massa a sem pulvinar condimentum.'
                ],
                date: '20/04/2019',
                time: '09:10'
            },
            {
                type: 'recieved',
                messages: [
                    'Etiam ex arcumentum'
                ],
                date: '20/04/2019',
                time: '09:11'
            },
            {
                type: 'sent',
                messages: [
                    'Etiam nec facilisis lacus. Nulla imperdiet augue ullamcorper dui ullamcorper, eu laoreet sem consectetur. Aenean et ligula risus. Praesent sed posuere sem. Cum sociis natoque penatibus et magnis dis parturient montes'
                ],
                date: '20/04/2019',
                time: '09:15'
            },
            {
                type: 'recieved',
                messages: [
                    'Cum sociis natoque penatibus et magnis dis parturient montes',
                    'Nascetur ridiculus mus. Etiam ac tortor ut elit sodales varius. Mauris id ipsum id mauris malesuada tincidunt. Vestibulum elit massa, pulvinar at sapien sed, luctus vestibulum eros. Etiam finibus tristique ante, vitae rhoncus sapien volutpat eget'
                ],
                date: '20/04/2019',
                time: '09:22'
            }
        ]
    };
    messageBuddies: any[] = [
        {
            name: 'Davil Parnell',
            img: '4.jpg',
            message: 'Fierent fastidii recteque ad pro'
        },
        {
            name: 'Ann Watkinson',
            img: '8.jpg',
            message: 'Cum sociis natoque penatibus'
        },
        {
            name: 'Marse Walter',
            img: '3.jpg',
            message: 'Suspendisse sapien ligula'
        },
        {
            name: 'Jeremy Robbins',
            img: '2.jpg',
            message: 'Phasellus porttitor tellus nec'
        },
        {
            name: 'Reginald Horace',
            img: '4.jpg',
            message: 'Quisque consequat arcu eget'
        },
        {
            name: 'Shark Henry',
            img: '5.jpg',
            message: 'Nam lobortis odio et leo maximu'
        },
        {
            name: 'Paul Van Dack',
            img: '2.jpg',
            message: 'Nam posuere purus sed velit auctor sodales'
        },
        {
            name: 'James Anderson',
            img: '1.jpg',
            message: 'Vivamus imperdiet sagittis quam'
        },
        {
            name: 'Kane Williams',
            img: '3.jpg',
            message: 'Suspendisse justo nulla luctus nec'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
