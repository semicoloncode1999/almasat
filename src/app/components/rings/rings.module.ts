import { RingsComponent } from './rings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RingsRoutingModule } from './rings-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToNumberPipe } from 'src/app/modules/pipes/to-number.pipe';


@NgModule({
  declarations: [
    RingsComponent,
    ToNumberPipe
  ],
  imports: [
    CommonModule,
    RingsRoutingModule,
    NgxPaginationModule
  ]
})
export class RingsModule { }
