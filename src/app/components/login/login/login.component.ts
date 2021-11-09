import { Component, OnInit } from '@angular/core';
import { Socialusers } from '../GmailUser';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angular-6-social-login';
import { LoginService } from 'src/app/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response;
  socialusers = new Socialusers();
  registered = false;
  loginForm: FormGroup;
  registerForm: FormGroup;
  mensajeLogin:any;
  mensajeRegister:any;
  constructor(public OAuth: AuthService,
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } else if (socialProvider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      this.saveSocialUser(socialusers);
    });
  }
  saveSocialUser(socialusers: Socialusers) {
    this.loginService.saveGmailUser(socialusers).subscribe((res: any) => {
      socialusers.rol = res.data;
      this.loginService.handleLoginCallback(socialusers);
      this.response = res.userDetail;
      this.router.navigate([`/home`]);
    })
  }
  register() {
    this.registered = true;
  }
  atras() {
    this.registered = false;
  }

  loginUser() {
      if(this.loginForm.valid)
      {
        this.loginService.login(this.loginForm.getRawValue()).subscribe((data) => 
        {
          if(data.status==200)
          {
            this.loginService.handleLoginCallback(data.data);
            this.mensajeLogin = "Se ha logueado correctamente";
            this.router.navigate([`/home`]);
          }else
          {
            this.mensajeLogin = data.data;
          }
        })
      }else
      {
        this.mensajeLogin = "Debe llenar todos los campos"
      }
  }

  registrarUser() {
    if(this.registerForm.valid)
    {
      this.loginService.register(this.registerForm.getRawValue()).subscribe((data) => 
      {
        if(data.status==200)
        {
          this.loginService.handleLoginCallback(data.data);
          this.mensajeRegister = data.data
        }else if(data.status==500)
        {
          this.mensajeRegister = data.data;
        }else
        {
          this.mensajeRegister = "Error";
        }
      })
    }else
    {
      this.mensajeRegister = "Debe llenar todos los campos"
    }
//     mensajeLogin
// mensajeRegister
  }
}
