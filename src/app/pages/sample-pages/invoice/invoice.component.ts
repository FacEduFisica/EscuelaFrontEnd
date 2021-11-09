import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  pageTitle: string = 'Invoice';
  pageSubTitle: string = 'Print ready simple and sleek invoice template. Please use Google Chrome or any other Webkit browsers for better printing.';

  invoice: any = {
    logo: 'invoice-logo.png',
    from: {
      name: 'David Designs LLC',
      address1: '44, Qube Towers Dubai Media City, Dubai',
      address2: 'United Arab Emirates',
      phone: '0097154686384',
      email: 'david.atom@ddesign.com'
    },
    to: {
      name: 'Mallinda Hollaway',
      address1: '10098 ABC Towers Dubai Silicon Oasis, Dubai',
      address2: 'United Arab Emirates',
      phone: '00971123456789',
      email: 'malinda.h@gmail.com'
    },
    attr: [
      {
        type: 'Invoice#',
        value: '456213'
      },
      {
        type: 'date',
        value: '20/06/2020'
      },
      {
        type: 'whatever',
        value: '472-000'
      },
      {
        name: 'total',
        value: '20,092.00'
      }
    ],
    items: [
      {
        name: 'Nullam consectetur dolor nec ullamcorper finibus. Quisque a porta mauris, non venenatis mi. Pellentesque habitant morbi tristique',
        price: '450.00',
        quantity: '05',
        totlal: '2250.00'
      },
      {
        name: 'Pellentesque habitant morbi tristique senectus',
        price: '20.00',
        quantity: '02',
        totlal: '40.00'
      },
      {
        name: 'Maecenas nec faucibus lectus. Ut cursus elit ante, rutrum pretium augue tincidunt ut. Suspendisse ultrices sapien sit amet',
        price: '2322.00',
        quantity: '01',
        totlal: '2322.00'
      },
      {
        name: 'Quisque a porta mauris, non venenatis mi. Pellentesque habitant morbi',
        price: '1290.00',
        quantity: '12',
        totlal: '15,480.00'
      }
    ],
    remarks: 'Ornare non tortor. Nam quis ipsum vitae dolor porttitor interdum. Curabitur faucibus erat vel ante fermentum lacinia. Integer porttitor laoreet suscipit. Sed cursus cursus massa ut pellentesque. Phasellus vehicula dictum arcu, eu interdum massa bibendum.',
    message: 'Proin ac iaculis metus. Etiam nisi nulla, fermentum blandit consectetur sed, ornare non tortor. Nam quis ipsum vitae dolor porttitor interdum. Curabitur faucibus erat vel ante fermentum lacinia. Integer porttitor laoreet suscipit. Sed cursus cursus massa ut pellentesque. Phasellus vehicula dictum arcu, eu interdum massa bibendum sit amet.',
    support: {
      email: 'support@company.com',
      phone: '00971 452 9900',
      website: 'www.company.com'
    }
  };

  print() {
    window.print();
  }

  constructor() { }

  ngOnInit() {
  }

}
