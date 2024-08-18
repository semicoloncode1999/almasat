import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersMsgsRoutingModule } from './users-msgs-routing.module';
import { UsersMsgsComponent } from './users-msgs.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    UsersMsgsComponent,
  ],
  imports: [
    CommonModule,
    UsersMsgsRoutingModule,
    NgxPaginationModule
  ]
})
export class UsersMsgsModule { }
