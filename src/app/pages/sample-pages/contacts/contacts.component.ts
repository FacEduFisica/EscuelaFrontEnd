import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../app.service";

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    pageTitle: string = 'Contacts';

    contactsItems: any[];
    contactsSearch: boolean = false;

    constructor(private service: AppService) {
        this.contactsItems = service.contactsItems
    }

    ngOnInit() {
    }

}
