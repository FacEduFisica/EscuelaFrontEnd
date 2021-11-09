import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listviews',
  templateUrl: './listviews.component.html'
})
export class ListviewsComponent implements OnInit {
  pageTitle: string = 'Listview';

  listviewData: Array<any> = [
    {
      title: 'Dulla vel metus scelerisque ante sollicitudin commodo purus odio',
      sub: 'Donec congue tempus ligula, varius hendrerit mi hendrerit sit amet. Duis ac quam sit amet leo feugiat iaculis',
      attr: [
          'Date Created: 09/06/1988',
          'Members: 78954',
          'Published: No'
      ],
      img: '1.jpg'
    },
    {
      title: 'Finibus consectetur mauris, eget laoreet turpis malesuada eredeu lectus sed enim suscipit euismod',
      sub: 'Aliquam fringilla neque sit amet libero convallis ac consequat nulla iaculis urabitur placerat mi sed massa euismod, a tincidunt enim tinciduntam porttitor lorem ac pharetra semper',
      attr: [
          'Comedy',
          'Reviewed',
          '5 Stars'
      ],
      letter: 'A',
      color: 'blue'
    },
    {
      title: 'Vestibulum cursus eros id ipsum finibus a pretium justo aliquam',
      sub: 'Etiam cursus lorem eget sapien euismod, ac elementum urna tempusonec dapibus',
      attr: [
        'James Anderson',
        'Software Developer'
      ],
      letter: 'C',
      color: 'pink'
    },
    {
      title: 'Nunc erat nunc ullamcorper sit amet odio vel accumsan viverra velit aliquam fringilla neque sit amet libero convallis, ac consequat nulla iaculis.',
      sub: 'Suspendisse aliquam sapien vitae elit ornare accumsan in dictum eratraesent pulvinar eros',
      attr: [
        '1988',
        'December',
        '10:12 PM'
      ],
      img: '2.jpg'
    },
    {
      title: 'Pellentesque vitae leo vestibulum odio mollis porta blandit eget nunc',
      sub: 'Suspendisse ullamcorper purus efficitur lorem hendrerit, rhoncus dignissim lorem vehicula',
      attr: [
        'Toyota',
        'Hilux',
        'Revo'
      ],
      img: '3.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
