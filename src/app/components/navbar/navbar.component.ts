import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

constructor (private _authService:AuthService) {}
connectedUser : User | undefined;


ngOnInit() {
  console.log("navbar ok");
  this._authService.$connectedUser.subscribe({
    next : (value) => {
      this.connectedUser = value;
      
      console.log("next ok");
    }
  });
}

logout() {
// console.log("ok ça marche")
  this._authService.deconnect()
}

}
