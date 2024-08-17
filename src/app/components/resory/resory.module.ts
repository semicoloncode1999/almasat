import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResoryRoutingModule } from './resory-routing.module';
import { ResoryComponent } from './resory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToNumberPipe } from 'src/app/modules/pipes/to-number.pipe';
import { RingsModule } from '../rings/rings.module';


@NgModule({
  declarations: [
    ResoryComponent,
  ],
  imports: [
    CommonModule,
    ResoryRoutingModule,
    NgxPaginationModule,
    RingsModule
  ]
})
export class ResoryModule { }
