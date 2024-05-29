import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRingsRoutingModule } from './admin-rings-routing.module';
import { AdminRingsComponent } from './admin-rings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminRingsComponent
  ],
  imports: [
    CommonModule,
    AdminRingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminRingsModule { }
