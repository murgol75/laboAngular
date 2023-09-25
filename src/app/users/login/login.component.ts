import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userForm : FormGroup;

  constructor(private _fb : FormBuilder) {
   this.userForm = this._fb.group({
     pseudo : [null, Validators.required],
     email : [null, [Validators.required,Validators.email]],
     password : [null, [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/)]],
     confirmPassword : [null, Validators.required],
     firstName :[null, Validators.required],
     lastName :[null, Validators.required],
   });
 }


  onSubmit() {}
}
