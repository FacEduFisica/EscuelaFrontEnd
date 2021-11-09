import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sidebar-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('toggleUserMenu', [
      state('void', style({
        height: '0',
        opacity: '0'
      })),
      state('true', style({
        height: '*',
        opacity: '1'
      })),
      transition(':enter', animate('200ms ease-in')),
      transition(':leave', animate('200ms ease-out'))
    ])
  ]
})
export class UserComponent implements OnInit {
  userMenu: boolean = false;
  user:any;
  imgUrl : string = '';

  constructor(public loginService:LoginService,private router:Router) { }

  ngOnInit() {
    this.user =  this.loginService.getUserInfo();
    this.imgUrl = this.user.image
  }

  logout()
  {
    this.loginService.logout().subscribe(
      res=>{
        this.router.navigate([`/login`]);
        localStorage.removeItem("AuthUser");
      },
      err => {
        console.log(err);
      }
    );
  }

}
