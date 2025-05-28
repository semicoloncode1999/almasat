import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersMsgsRoutingModule } from './users-msgs-routing.module';
import { UsersMsgsComponent } from './users-msgs.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
    imports: [
        CommonModule,
        UsersMsgsRoutingModule,
        NgxPaginationModule,
        UsersMsgsComponent
    ]
})
export class UsersMsgsModule { }
