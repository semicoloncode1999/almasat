import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAboutRoutingModule } from './admin-about-routing.module';
import { AdminAboutComponent } from './admin-about.component';


@NgModule({
  declarations: [
    AdminAboutComponent
  ],
  imports: [
    CommonModule,
    AdminAboutRoutingModule
  ]
})
export class AdminAboutModule { }
