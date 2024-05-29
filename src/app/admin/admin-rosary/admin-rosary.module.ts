import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRosaryRoutingModule } from './admin-rosary-routing.module';
import { AdminRosaryComponent } from './admin-rosary.component';


@NgModule({
  declarations: [
    AdminRosaryComponent
  ],
  imports: [
    CommonModule,
    AdminRosaryRoutingModule
  ]
})
export class AdminRosaryModule { }
