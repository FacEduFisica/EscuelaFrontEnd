import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../app.service';

@Component({
  selector: 'app-contacts',
  templateUrl: 'contacts.component.html'
})
export class ContactsComponent implements OnInit {
  contacts: any[];

  constructor(private service: AppService) {
    this.contacts = service.contactsItems
  }

  ngOnInit() {
  }

}
