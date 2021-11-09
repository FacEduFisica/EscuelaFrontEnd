import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-recent-posts',
  templateUrl: 'recent-posts.component.html'
})
export class RecentPostsComponent implements OnInit {
  widgetTitle: string = 'Recent Posts';
  widgetSubTitle:String = 'Commodo cursus magnavel scelerisque consectetur'
  recentPostsData: Array<any> = [
    {
      author: 'Jeannette Lawson',
      post: 'Donec congue tempus ligula, varius hendrerit mi hendrerit sit amet. Duis ac quam sit amet leo feugiat iaculis',
      img: '1.jpg',
    },
    {
      author: 'David Villa Jacobs',
      post: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis lobortis sapien non posuere',
      img: '2.jpg'
    },
    {
      author: 'Candice Barnes',
      post: 'Quisque non tortor ultricies, posuere elit id, lacinia purus curabitur',
      img: '3.jpg'
    },
    {
      author: 'Darla Mckinney',
      post: 'Duis tincidunt augue nec sem dignissim scelerisque. Vestibulum rhoncus sapien sed nulla aliquam lacinia',
      img: '4.jpg'
    },
    {
      author: 'Rudolph Perez',
      post: 'Phasellus a ullamcorper lectus, sit amet viverra quam. In luctus tortor vel nulla pharetra bibendum',
      img: '5.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
