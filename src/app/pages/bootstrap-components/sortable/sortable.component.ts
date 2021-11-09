import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html'
})
export class SortableComponent implements OnInit {
  pageTitle: string = 'Sortable';
  pageSubTitle: string = `The sortable component represents a list of items, with ability to sort them or move to another container via drag&drop. Input collection isn't mutated by the component, so events <code>ngModelChange</code>, <code>onChange</code> are using new collections.`;

  sortableBasic: any[] = [
    'Sed posuere consectetur est at lobortis',
    'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit',
    'Nullam id dolor id nibh ultricies vehicula ut id elit',
    'Aenean lacinia bibendum nulla sed consectetur',
    'Cras justo odio, dapibus ac facilisis in, egestas eget quam',
    'Praesent commodo cursus magna, vel scelerisque nisl consectetur et',
    'Curabitur blandit tempus porttitor'
  ];

  sortableComplexLeft: any[] = [
    { id: 1, name: 'Amet' },
    { id: 2, name: 'Vehicula' },
    { id: 3, name: 'Dapibus' }
  ];

  sortableComplexRight: any[] = [
    { id: 4, name: 'Nibhotitioness' },
    { id: 5, name: 'Mattis' },
    { id: 6, name: 'Quamputerenesto' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
