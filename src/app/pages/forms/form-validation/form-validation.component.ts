import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html'
})
export class FormValidationComponent implements OnInit {
  pageTitle: string = 'Custom Form Validation';
  pageSubTitle: string = `Provide valuable, actionable feedback to your users with HTML5 form validation available in all our supported browsers. Choose from the browser default validation feedback, or implement custom messages with Bootstrap's built-in classes and starter JavaScript.`;

  constructor() { }

  ngOnInit() {
  }

}
