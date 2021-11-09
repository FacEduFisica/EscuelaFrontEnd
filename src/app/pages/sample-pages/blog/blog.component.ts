import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
    pageTitle: string = 'Material Admin 2.0 Blog';
    pageSubTitle: string = 'Duis mollisest non commodo luctus nisierat porttito';

    blogPosts: any[] = [
        {
            title: 'Curabitur blandit tempus porttitor',
            author: 'Sam Andersion',
            date: '17th July 2017',
            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
            img: '1.jpg'
        },
        {
            title: 'Maecenas sed diam eget risus varius blandit',
            author: 'Dave Rubin',
            date: '15th July 2017',
            content: 'Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
            img: '2.jpg'
        },
        {
            title: 'Donec id elit non mi porta gravida at eget metus',
            author: 'Malinda Hollaway',
            date: '10th July 2017',
            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Aenean lacinia bibendum nulla sed consectetur.',
            img: '3.jpg'
        },
        {
            title: 'Maecenas faucibus mollis interdum',
            author: 'Nate Davis',
            date: '5th July 2017',
            content: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
            img: '4.jpg'
        },
        {
            title: 'Curabitur blandit tempus porttitor',
            author: 'Sam Andersion',
            date: '4th July 2017',
            content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        }
    ];

    popularPostsTitle: string = 'Popular Posts';
    popularPostsSubTitle: string = 'Venenatis portauam Inceptos ameteiam';
    popularPosts: any[] = [
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            author: 'Jane Neimor',
            date: '1st July 2017',
            img: '1.jpg'
        },
        {
            title: 'Nam quis dolor dapibus, viverra leo eu, egestas nisi',
            author: 'Nate Davis',
            date: '5th July 2017',
            img: '2.jpg'
        },
        {
            title: 'Fusce ullamcorper urna et sodales imperdiet',
            author: 'Malinda Hollaway',
            date: '10th July 2017',
            img: '3.jpg'
        },
        {
            title: 'Cras pellentesque orci in libero scelerisque commodo',
            author: 'Dave Rubin',
            date: '15th July 2017',
            img: '4.jpg'
        },
        {
            title: 'Sed suscipit sem non lectus imperdiet ornare',
            author: 'Sam Andersion',
            date: '17th July 2017',
            img: '5.jpg'
        }
    ];

    featurePost: any = {
        img: './assets/demo/img/widgets/note.png',
        title: 'Pellentesque Ligula Fringilla',
        author: 'Malinda Hollaway',
        date: '19th June 2019',
        time: '09:10 AM',
        content: 'Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra.'
    };

    blogCategories: any[] = [
        'Sollicitudin',
        'Ultricies',
        'Elit',
        'Crastortor',
        'Condimentum',
        'Egestas',
        'Loremipsum',
        'Ridiculus',
        'Renaissance',
        'Curabitur',
        'Tristiqueeubibendum',
        'Phase'
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
