import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  sectionTitles: any = {
    1: {
      title: 'Basic example',
      sub: 'Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they’ll naturally fill the full width of its parent element.'
    },
    2: {
      title: 'Card with actions',
      sub: 'Cards can also contains action links in icon format.'
    },
    3: {
      title: 'Body',
      sub: 'The building block of a card is the <code>.card-body</code>. Use it whenever you need a padded section within a card.'
    },
    4: {
      title: 'Card links',
      sub: 'Links are added and placed next to each other by adding <code>.card-link</code> to a <code>&#x3C;a&#x3E;</code> tag.'
    },
    5: {
      title: 'Images',
      sub: 'Cards can also include images in the top and bottom.'
    },
    6: {
      title: 'Image overlays',
      sub: 'Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need <code>.card--inverse</code>.'
    },
    7: {
      title: 'Background and color',
      sub: 'Change the card backgrounds using color utility classes.'
    },
    8: {
      title: 'Card Groups',
      sub: 'Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use <code>display: flex;</code> to achieve their uniform sizing.'
    },
    9: {
      title: 'Card decks',
      sub: 'Need a set of equal width and height cards that aren’t attached to one another? Use card decks.'
    }
  };

  cardTitle: string = 'Card title';
  cardSubTitle: string = 'Praesent commodo cursus magna scelerisque consectetur.';
  cardContent: string = 'Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero';

  constructor() { }

  ngOnInit() {
  }

}
