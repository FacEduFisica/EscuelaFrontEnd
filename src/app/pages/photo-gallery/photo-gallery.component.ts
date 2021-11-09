import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html'
})
export class PhotoGalleryComponent implements OnInit {
  pageTitle: string = 'Photo Gallery'; // Number of pictures currently available is 24
  galleryItems = new Array(24);
  gallerySearch: boolean = false;

  constructor() {}

  ngOnInit() {
  }

}
