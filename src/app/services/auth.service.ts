import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';
import { Router } from '@angular/router';
// import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi : string = 'https://localhost:7245/api/Auth/Register'
  // loginUrlApi : string = 'https://localhost:7245/api/Auth/LogIn'
  // httpClient: any;
  // registerForm: any;

  constructor(private http: HttpClient,
    private router: Router) {}



create(register:Register):void {
this.http.post(this.urlApi, register).subscribe({ //this.registerForm.value envoie un json
  next : response => {
    console.log('register successfull : ', response)
    // renvoyer l'utilisateur sur le login
    this.router.navigate(['/users/login']);
  },
  error:error => {
    // console.log('register fail : ', error) // en vrai ne pas renvoyer l'erreur en front
    console.log('register fail : ',error)

  }
})
}




















  // registerUser(user: Register) {
  //   return this.postUser(user);
  // }





  // postUser(user : Register) : void {
  //   this.http.post(this.urlApi, user).subscribe({
  //     next : Response => {
  //       console.log('register successfull : ', Response)
  //     },
  //     error:error => {
  //       console.log('register fail : ', error)

  //     }
  //   })
  // }
}