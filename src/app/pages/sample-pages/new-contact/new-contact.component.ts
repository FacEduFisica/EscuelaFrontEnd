import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-new-contact',
    templateUrl: './new-contact.component.html'
})
export class NewContactComponent implements OnInit {
    pageTitle: string = 'Add new contact';
    pageSubTitle: string = 'Nullam id dolor id nibh ultricies vehicula ut id elit';

    contactDefaultImg: string = './assets/demo/img/contacts/user_empty.png';

    newContactForm: FormGroup;
    formSubmitted: boolean = false;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.newContactForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            emailAddress: ['', [Validators.required, Validators.email]],
        });
    }

    get f() {
        return this.newContactForm.controls;
    }

    onSubmit() {
        this.formSubmitted = true;
    }

}
