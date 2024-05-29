import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGemstonesRoutingModule } from './admin-gemstones-routing.module';
import { AdminGemstonesComponent } from './admin-gemstones.component';


@NgModule({
  declarations: [
    AdminGemstonesComponent
  ],
  imports: [
    CommonModule,
    AdminGemstonesRoutingModule
  ]
})
export class AdminGemstonesModule { }
