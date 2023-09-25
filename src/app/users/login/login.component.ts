import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    private router: Router) {
   this.userForm = this._fb.group({
     identifier : [null, Validators.required],
     password : [null, Validators.required],
   });
 }


 login():void {
  if(!this.userForm.valid) {
    console.log('pas valide')
  } else {
    this._httpClient.post(this.loginUrlApi, this.userForm.value).subscribe({
      next : (res : any) => {// res est l'objet user qu'on reçoit et il peut etre de n'importe quel type
        console.log(res);
        // on stocke le token dans le localstorage sous le nom apiToken.  Res.accesToken est le token lié au résultat
        localStorage.setItem('apiToken', res.accessToken);
        this.router.navigate(['events/eventList']);
      }
    });
  };
}

}
