import { Component } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent {
  eventowner : boolean = true;



  // ngOnInit() {}

  // export interface Event {
  //   id : number;
  //   name : string;
  //   description : string;
  //   startDate : Date;
  //   endDate : Date;
  //   maxGuest : number;
  //   isCancel : Boolean;    
  //   creatorId: number;
  // }
}
