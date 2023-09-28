import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm : FormGroup;
  httpClient: any;
  loginForm: any;
  loginUrlApi : string = 'https://localhost:7245/api/Auth/LogIn'


  constructor(private _fb : FormBuilder,
    private _httpClient : HttpClient,
    private router: Router,
    private _authService:AuthService) {
   this.userForm = this._fb.group({
     identifier : [null, Validators.required],
     password : [null, Validators.required],
   });
 }


 connect():void {
  if(!this.userForm.valid) {
    console.log('pas valide')
  } else {

this._authService.login(this.userForm.value);

    
      }
    }
  }