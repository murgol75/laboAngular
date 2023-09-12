import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    ComponentsComponent,
    
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
