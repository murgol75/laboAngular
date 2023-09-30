import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,

    // ↓ Pour les formulaires
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
