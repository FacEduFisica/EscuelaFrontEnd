import { Component, OnInit } from "@angular/core";
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Options } from 'ng5-slider';

@Component({
  selector: "app-form-components",
  templateUrl: "./form-components.component.html",
  styleUrls: ["./form-components.component.scss"]
})
export class FormComponentsComponent implements OnInit {
  pageTitle: string = "Form Components";

  // ng-select
  ngSelectSelected: string;
  ngSelectSelectedDisabled: string;
  ngSelectSelectedDisabledOption: string;
  ngSelectSelectedSearch: string;
  ngSelectSelectedMultiple: Array<string>;
  ngSelectData: Array<any> = [
    { id: 1, name: "Toyota" },
    { id: 2, name: "Nissan" },
    { id: 3, name: "Mitsubishi" },
    { id: 4, name: "Kia" },
    { id: 5, name: "Isuzu" },
    { id: 6, name: "Mazda" }
  ];
  ngSelectDataDisabled: Array<any> = [
    { id: 1, name: "Toyota" },
    { id: 2, name: "Nissan" },
    { id: 3, name: "Mitsubishi", disabled: true },
    { id: 4, name: "Kia", disabled: true },
    { id: 5, name: "Isuzu", disabled: true },
    { id: 6, name: "Mazda" }
  ];


  // ngx-dropzone
  DropzoneConfig: DropzoneConfigInterface = {
    url: '/',
    addRemoveLinks: true
  };


  // Toggle Switch
  toggleSwitchStatus: boolean = false;
  toggleSwitchStatusActive: boolean = true;


  // Icon Toggles
  iconTogglesStatus: boolean = false;


  // Custom Checkbox
  customCheckboxStatus: boolean = false;


  // ng5-slider
  sliderValue: number = 100;
  sliderOptions: Options = {
    floor: 0,
    ceil: 200,
    showSelectionBar: true,
    hideLimitLabels: true
  };

  rangeSliderMinValue: number = 20;
  rangeSliderMaxValue: number = 80;
  rangeSliderOptions: Options = {
    floor: 0,
    ceil: 100
  }

  constructor() {}

  ngOnInit() {}
}
