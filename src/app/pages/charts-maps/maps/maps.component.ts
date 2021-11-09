import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html'
})
export class MapsComponent implements OnInit {
  pageTitle: string = 'Maps';
  pageSubTitle: string = 'JQVMap is a plugin that renders Interactive, Clickable Vector Maps. It uses resizable Scalable Vector Graphics (SVG) for modern browsers.';

  // World
  mapWorld: any  = {
    map: 'world_en',
    backgroundColor: '#fff',
    color: '#00BCD4',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // Asia
  mapAsia: any  = {
    map: 'asia_en',
    backgroundColor: '#fff',
    color: '#ff6b68',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // Africa
  mapAfrica: any  = {
    map: 'africa_en',
    backgroundColor: '#fff',
    color: '#d066e2',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // Australia
  mapAustralia: any  = {
    map: 'australia_en',
    backgroundColor: '#fff',
    color: '#673AB7',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // North America
  mapNorthAmerica: any  = {
    map: 'north-america_en',
    backgroundColor: '#fff',
    color: '#2196F3',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // South America
  mapSouthAmerica: any  = {
    map: 'south-america_en',
    backgroundColor: '#fff',
    color: '#39bbb0',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // Europe
  mapEurope: any  = {
    map: 'europe_en',
    backgroundColor: '#fff',
    color: '#32c787',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // USA
  mapUsa: any  = {
    map: 'usa_en',
    backgroundColor: '#fff',
    color: '#CDDC39',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // Russia
  mapRussia: any  = {
    map: 'russia_en',
    backgroundColor: '#fff',
    color: '#ffc721',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // Germany
  mapGermany: any  = {
    map: 'germany_en',
    backgroundColor: '#fff',
    color: '#FF5722',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // France
  mapFrance: any  = {
    map: 'france_fr',
    backgroundColor: '#fff',
    color: '#03A9F4',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  // Canada
  mapCanada: any  = {
    map: 'canada_en',
    backgroundColor: '#fff',
    color: '#ff85af',
    borderColor: '#fff',
    hoverColor: '#607D8B',
    enableZoom: true
  };

  constructor() { }

  ngOnInit() {
  }

}
