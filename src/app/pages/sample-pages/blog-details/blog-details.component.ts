import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
    post: any = {
        title: 'Curabitur blandit tempus porttitor',
        img: './assets/demo/img/blog/1.jpg',
        date: '17th July 2019',
        tags: [
            'Sollicitudin',
            'Ultricies',
            'Elit',
            'Crastortor',
            'Condimentum'
        ],
        author: {
            name: 'Sam Andersion',
            img: './assets/demo/img/contacts/1.jpg',
            about: 'Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi porta gravida at eget metus.',
            social: [
                {
                    icon: 'facebook',
                    color: 'indigo'
                },
                {
                    icon: 'twitter',
                    color: 'cyan'
                },
                {
                    icon: 'google',
                    color: 'red'
                },
                {
                    icon: 'linkedin',
                    color: 'blue'
                }
            ]
        },
        post: `<p class="card-text">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>

<p class="card-text">Cras mattis consectetur purus sit amet fermentum. Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>

<p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Cras mattis consectetur purus sit amet fermentum.</p>

<p class="card-text">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit Donec id elit non mi porta gravida at eget metus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Sed posuere consectetur est at lobortis. amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>`,
    };

    postActions: any[] = [
        {
            action: 'favourite',
            icon: 'favorite-outline'
        },{
            action: 'comment',
            icon: 'comment-text'
        },{
            action: 'share',
            icon: 'share'
        }
    ];

    relatedPost: any = {
        widget: {
            title: 'Related Posts',
            sub: 'Venenatis portauam Inceptos ameteiam'
        },
        post: [
            {
                img: '1.jpg',
                title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
                author: 'Jane Neimor',
                date: '1st July 2019'
            },
            {
                img: '2.jpg',
                title: 'Nam quis dolor dapibus, viverra leo eu, egestas nisi',
                author: 'Nate Davis',
                date: '5th July 2019'
            },
            {
                img: '3.jpg',
                title: 'Fusce ullamcorper urna et sodales imperdiet',
                author: 'Malinda Hollaway',
                date: '10th July 2019'
            },
            {
                img: '4.jpg',
                title: 'Cras pellentesque orci in libero scelerisque commodo',
                author: 'Dave Rubin',
                date: '15th July 2019'
            },
            {
                img: '5.jpg',
                title: 'Sed suscipit sem non lectus imperdiet ornare',
                author: 'Sam Andersion',
                date: '17th July 2019'
            },
        ]
    };

    constructor() {
    }

    ngOnInit() {
    }

}
