import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResoryRoutingModule } from './resory-routing.module';
import { ResoryComponent } from './resory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToNumberPipe } from 'src/app/modules/pipes/to-number.pipe';


@NgModule({
  declarations: [
    ResoryComponent,
    ToNumberPipe
  ],
  imports: [
    CommonModule,
    ResoryRoutingModule,
    NgxPaginationModule
  ]
})
export class ResoryModule { }
