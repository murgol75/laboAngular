import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
   registerForm : FormGroup;

   constructor(private _fb : FormBuilder) {
  //  constructor(private _fb : FormBuilder, public _authService : AuthService) {
    this.registerForm = this._fb.group({
      pseudo : [null, Validators.required],
      email : [null, [Validators.required,Validators.email]],
      password : [null, [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/)]],
      confirmPassword : [null, Validators.required],
      firstName :[null, Validators.required],
      lastName :[null, Validators.required],
    });
  }

  createUser() : void {
    if(!this.registerForm.valid) {

      console.log('pas valide')
    }
    else {
      console.log(this.registerForm.value)
    }
  }


  // createUser() : void {
  //   if(!this.registerForm.valid) {

  //     console.log('pas valide')
  //   }else {
  //     console.log(this.registerForm.value),
  //     this._authService.postUser(this.registerForm.value)
      
  //   }
  // }

  
}
