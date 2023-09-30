import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { connectedGuard } from '../guards/connected.guard';

const routes: Routes = [
  { path : "eventCreate" , component : EventCreateComponent, canActivate : [connectedGuard] },
  { path : "eventDetails" , component : EventDetailsComponent},
  { path : "eventList" , component : EventListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
