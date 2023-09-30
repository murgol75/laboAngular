import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../models/register';
import { Router } from '@angular/router';
import { UserLogin } from '../models/userLogin';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { UserReceived } from '../models/userReceived';
// import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi : string = 'https://localhost:7245/api/Auth/Register'
  loginUrlApi : string = 'https://localhost:7245/api/Auth/LogIn'
  
  user : User |undefined;
  private _$connectedUser : BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(this.getUser());
  $connectedUser : Observable<User | undefined> = this._$connectedUser.asObservable();
  
  getUser() : User | undefined {
    return this.user
  }

  constructor(private _http: HttpClient,
    private _router: Router) {}


create(register:Register):void {
this._http.post(this.urlApi, register).subscribe({ //this.registerForm.value envoie un json
  next : response => {
    console.log('register successfull : ', response)
    // renvoyer l'utilisateur sur le login
    this._router.navigate(['/users/login']);
  },
  error:error => {
    // console.log('register fail : ', error) // en vrai ne pas renvoyer l'erreur en front
    console.log('register fail : ',error)

  }
})
}

login(user : UserLogin):void {
    this._http.post<UserReceived>(this.loginUrlApi, user).subscribe({
      next : (res : UserReceived) => {// res est l'objet user qu'on reçoit et il peut etre de n'importe quel type
        console.log(res);
        // on stocke le token dans le localstorage sous le nom apiToken.  Res.accesToken est le token lié au résultat
        localStorage.setItem('apiToken', res.token);
        this._$connectedUser.next(res.member)
        this._router.navigate(['events/eventList']);
      }
    })
    
  }
  
  deconnect() {
    localStorage.removeItem('apiToken')
    console.log("et ça ça marche aussi")
    this._router.navigate(['/']);
}
}