import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'widget-featured-post',
  templateUrl: 'featured-post.component.html'
})
export class FeaturedPostComponent implements OnInit {

  @Input()
  noticia;

  widgetTitle: string;
  widgetSubTitle: string;  
  widgetImg: string = './assets/img/poliimg.png';
  widgetContent: string;
  widgetTopic: string;

  constructor() { }

  ngOnInit() {
    this.widgetTitle = this.noticia.titulo;
    this.widgetSubTitle = this.noticia.subtitulo;
    this.widgetContent = this.noticia.contenido;
    this.widgetImg = this.noticia.imagen;
    this.widgetTopic = this.noticia.tema;
  }

}
