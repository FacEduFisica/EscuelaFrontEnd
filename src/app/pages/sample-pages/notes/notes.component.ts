import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
    pageTitle: string = 'Notes';
    pageSubTitle: string = 'Vestibulum id ligula porta felis euismod semperonec id elit non mi porta gravida';

    noteSerach: boolean = false;
    modules: any = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'align': [] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ]
    };
    notes: any[] = [
        {
            title: 'Maecenas faucibus mollis',
            note: 'Aenean lacinia bibendum nulla sed consectetur. Aenean lacinia bibendum nulla sed consectetur. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Sed posuere consectetur est at lobortis.'
        },
        {
            title: 'Donec id elit non mi porta',
            note: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.'
        },
        {
            title: null,
            note: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Curabitur blandit tempus porttitor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
        },
        {
            title: null,
            note: 'Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue.'
        },
        {
            title: null,
            note: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.'
        },
        {
            title: null,
            note: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna.'
        },
        {
            title: 'Justo Bibendum',
            note: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam.'
        },
        {
            title: 'Sed posuere consectetur est at lobortis',
            note: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.'
        },
        {
            title: 'Aenean Nibh',
            note: 'Sed posuere consectetur est at lobortis. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
        },
        {
            title: 'Amet Condimentum Nullam',
            note: 'Donec ullamcorper nulla non metus auctor fringilla. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
        },
        {
            title: null,
            note: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        },
        {
            title: null,
            note: 'Risus id dolor id nibh ultricies vehicula ut id elit.'
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
