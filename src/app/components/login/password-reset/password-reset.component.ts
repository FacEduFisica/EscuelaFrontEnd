import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class PasswordResetComponent implements OnInit {
  token: any;
  mensaje: any;
  verification: Boolean;
  resetPasswordForm: FormGroup;
  constructor(private loginService: LoginService,private formBuilder: FormBuilder,private routerActive: ActivatedRoute) { }

  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['',Validators.required],
      password_confirmation: ['',Validators.required]
    })
    
  }

  reset() {
    this.token = this.routerActive.snapshot.paramMap.get('token')
    if(this.resetPasswordForm.valid) {
      this.loginService.resetPassword(this.resetPasswordForm.getRawValue(),this.token)
      .subscribe(
        res=>{
          this.mensaje = res.message;
        },
        err => {
          this.mensaje = err.error.error;
        }
      )
    } else {
      this.mensaje = "Debe llenar todos los campos"
    }
  }

  verify() {
    if(this.resetPasswordForm.value.password != this.resetPasswordForm.value.password_confirmation) {
      this.verification = false;
    }else {
      this.verification = true
    }
  }

}
