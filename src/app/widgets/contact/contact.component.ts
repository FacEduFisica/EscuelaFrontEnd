import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  pageTitle: string = 'Contact Information';
  pageSubTitle: string = 'Fusce eget dolor id justo luctus commodo vel pharetra nisi';

  contactInfo: any = [
    {
      type: 'phone',
      icon: 'phone',
      value: '00971123456789'
    },
    {
      type: 'email',
      icon: 'email',
      value: 'malinda.h@gmail.com'
    },
    {
      type: 'facebook',
      icon: 'facebook-box',
      value: 'malinda.hollaway'
    },
    {
      type: 'twitter',
      icon: 'twitter',
      value: '@malinda (twitter.com/malinda)'
    },
    {
      type: 'address',
      icon: 'pin',
      value: '44-46 Morningside Road, Edinburgh, Scotland'
    }
  ];

  contactMap = './assets/demo/img/widgets/map.png';

  constructor() { }

  ngOnInit() {
  }

}
