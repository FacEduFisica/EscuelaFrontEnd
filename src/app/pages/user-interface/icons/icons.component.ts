import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  pageTitle: string = 'MATERIAL DESIGN ICONIC FONT 2.2.0';
  pageSubTitle: string = 'Material Design Iconic Font is a full suite of official material design icons (created and maintained by Google), with additional community-designed icons and brands icons for easy scalable vector graphics on websites or desktop.';

  constructor() { }

  ngOnInit() {
  }

}
