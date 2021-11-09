import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class PasswordForgotComponent implements OnInit {
  forgotPasswordForm: FormGroup;
  mensaje:any;
  constructor(private loginService: LoginService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
    });
  }

  forgot() {
    if(this.forgotPasswordForm.valid) {
      this.loginService.forgotPassword(this.forgotPasswordForm.getRawValue()).subscribe(
        res=>{
          this.mensaje = res.message;
        },
        err => {
          this.mensaje = err.error.error;
        }
      )
    } else {
      this.mensaje = "Debe llenar el campo"
    }
  }

}
