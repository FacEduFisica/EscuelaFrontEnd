import { Component, OnInit } from '@angular/core';
import { AdmiService } from 'src/app/services/admi.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html'
})
export class WidgetsComponent implements OnInit {
  widgetTitle: string = 'Widgets';
  widgetSubTitle: string = 'Cumsociis natoque penatibus magnis parturient montes, nascetur ridiculus';
  noticias:any;

  constructor(private adminService:AdmiService) { 
    console.log("widget executed");
  }

  ngOnInit() {
    this.adminService.getNoticias().subscribe((data) => 
    {
      if(data)
      {
        this.noticias = data;
      }
    });
  }

}
