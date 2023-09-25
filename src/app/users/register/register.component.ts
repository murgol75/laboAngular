// import { HttpClient } from '@angular/common/http';;
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Register } from 'src/app/models/register';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm : FormGroup;

   urlApi : string = 'https://localhost:7245/api/Auth/Register'
   loginUrlApi : string = 'https://localhost:7245/api/Auth/LogIn'

   constructor(private _fb : FormBuilder,
    private _authService: AuthService,
    // private httpClient : HttpClient
    ) {
    this.registerForm = this._fb.group({
      pseudo : [null, Validators.required,],
      email : [null, [Validators.required,Validators.email]],
      password : [null, [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{5,}$/)]],
      firstName :[null, Validators.required],
      lastName :[null, Validators.required],
    });
  }

  createUser() : void {
    if(!this.registerForm.valid) {
      this.registerForm.markAllAsTouched(); 
      console.log('pas valide')
    }
    else {
      console.log('formulaire valide'+this.registerForm.value);
      // appel de la methode qui est dans le service auth.service.ts
      this._authService.create(this.registerForm.value)
    }
  }
  
}
