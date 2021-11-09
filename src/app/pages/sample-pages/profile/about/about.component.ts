import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html'
})
export class AboutComponent implements OnInit {
  aboutInfo: any = {
    name: 'Malinda Hollaway',
    about: 'Pellentesque vitae quam quis tellus dignissim faucibus. Suspendisse mattis felis at faucibus lobortis. Sed sit amet tellus dolor. Fusce quis sollicitudin velit. Praesent gravida ullamcorper lectus et tincidunt. Phasellus lectus quam, porta pharetra feugiat in, auctor eget dolor.',
    aboutMore: 'Vestibulum tincidunt imperdiet egestas. In in nunc vitae elit tincidunt tristique id eu justo. Quisque gravida maximus orci, vulputate pharetra mauris commodo at. Mauris eget fermentum ipsum, quis faucibus neque. Fusce eleifend sapien sit amet convallis rhoncus. Proin commodo lacinia lectus, et tempus turpis.',
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
      },
      {
        icon: 'facebook',
        value: 'mallinda-hollaway'
      },
      {
        icon: 'pin',
        value: '5470 Madison Street Severna Park, MD 21146'
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
