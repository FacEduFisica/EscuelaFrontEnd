import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  

  message = '';
  constructor(private router: ActivatedRoute) { } 

  ngOnInit() {
    const mensaje = this.router.snapshot.paramMap.get('message'); 
    this.message = mensaje
  }

}
