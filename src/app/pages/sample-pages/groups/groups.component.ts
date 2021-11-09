import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
    pageTitle: string = 'Groups';

    groupsSearch: boolean = false;
    contactDefaultImg: string = './assets/demo/img/contacts/group_empty.jpg';
    groups: any[] = [
        {
            name: 'Business Clients',
            count: 106,
            contacts: [
                {
                    name: 'Ridiculus',
                    img: '1.jpg',
                },
                {
                    name: 'Sit',
                    img: '2.jpg',
                },
                {
                    name: 'Justo',
                    img: '3.jpg',
                },
                {
                    name: 'Ponto',
                    img: '4.jpg',
                }
            ]
        },
        {
            name: 'San Fransisco',
            count: '12',
            contacts: [
                {
                    name: 'Pellentesque',
                    img: '5.jpg',
                },
                {
                    name: 'Sem',
                    img: '6.jpg',
                },
                {
                    name: 'Dapibus',
                    char: 'D',
                    color: 'blue'
                },
                {
                    name: 'Parturient',
                    char: 'P',
                    color: 'red'
                }
            ]
        },
        {
            name: 'Pending Leads',
            count: '42',
            contacts: [
                {
                    name: 'Magna',
                    img: '7.jpg',
                },
                {
                    name: 'Inceptos',
                    img: '8.jpg',
                },
                {
                    name: 'Nullam',
                    char: 'N',
                    color: 'amber'
                },
                {
                    name: 'Nibh',
                    img: '9.jpg',
                }
            ]
        },
        {
            name: 'Management',
            count: '3',
            contacts: [
                {
                    name: 'Dapibus',
                    img: '1.jpg',
                },
                {
                    name: 'Fusce',
                    img: '2.jpg',
                },
                {
                    name: 'Mattis',
                    img: '3.jpg',
                }
            ]
        },
        {
            name: 'Colleagues',
            count: '22',
            contacts: [
                {
                    name: 'Bibendum',
                    img: '10.jpg',
                },
                {
                    name: 'Lorem',
                    img: '11.jpg',
                },
                {
                    name: 'Porta',
                    img: '9.jpg',
                },
                {
                    name: 'Egestas',
                    img: '5.jpg',
                }
            ]
        },
        {
            name: 'Los Angeles',
            count: '27',
            contacts: [
                {
                    name: 'Aenean',
                    char: 'A',
                    color: 'yellow'
                },
                {
                    name: 'Mattis',
                    char: 'M',
                    color: 'blue-grey'
                },
                {
                    name: 'Egestas',
                    char: 'E',
                    color: 'indigo'
                },
                {
                    name: 'Lorem',
                    char: 'L',
                    color: 'teal'
                },
            ]
        },
        {
            name: 'Out Sourcing',
            count: '1',
            contacts: [
                {
                    name: 'Ipsum',
                    img: '12.jpg',
                }
            ]
        },
        {
            name: 'San Diego',
            count: '243',
            contacts: [
                {
                    name: 'Adipiscing',
                    char: 'A',
                    color: 'cyan'
                },
                {
                    name: 'Vulputate',
                    char: 'V',
                    color: 'purple'
                },
                {
                    name: 'Parturient',
                    char: 'P',
                    color: 'pink'
                },
                {
                    name: 'Sollicitudin',
                    char: 'S',
                    color: 'green'
                },
            ]
        },
        {
            name: 'Communication',
            count: '96',
            contacts: [
                {
                    name: 'Magna',
                    img: '15.jpg',
                },
                {
                    name: 'Ipsum',
                    img: '4.jpg',
                },
                {
                    name: 'Sit',
                    img: '13.jpg',
                },
                {
                    name: 'Fusce',
                    img: '14.jpg',
                }
            ]
        },
        {
            name: 'Not Verified',
            count: '0',
            contacts: []
        },
        {
            name: 'Email List',
            count: '1897',
            contacts: [
                {
                    name: 'Dolor',
                    img: '15.jpg',
                },
                {
                    name: 'Vehicula',
                    img: '4.jpg',
                },
                {
                    name: 'Magna',
                    char: 'M',
                    color: 'teal'
                },
                {
                    name: 'Ornare',
                    img: '14.jpg',
                }
            ]
        },
        {
            name: 'Connected',
            count: '174',
            contacts: [
                {
                    name: 'Finfo',
                    img: '13.jpg',
                },
                {
                    name: 'Marridian',
                    img: '2.jpg',
                },
                {
                    name: 'Borbrook',
                    char: 'M',
                    color: 'orange'
                },
                {
                    name: 'Wenthom',
                    char: 'W',
                    color: 'red'
                },
            ]
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
