import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {

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

}
