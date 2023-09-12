import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // routes avec enfants
  { path : "", component : HomeComponent },
  { path : "home", redirectTo : "/" },
  { path : "events", component : EventsComponent, loadChildren : () => import("./events/events.module").then(m => m.EventsModule) },
  { path : "users", component : UsersComponent, loadChildren : () => import("./users/users.module").then(m => m.UsersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
