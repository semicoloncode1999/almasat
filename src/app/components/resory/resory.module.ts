import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResoryRoutingModule } from './resory-routing.module';
import { ResoryComponent } from './resory.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RingsModule } from '../rings/rings.module';


@NgModule({
  declarations: [
    ResoryComponent,
  ],
  imports: [
    CommonModule,
    ResoryRoutingModule,
    NgxPaginationModule,
    RingsModule // we import it because it declares & exports the ToNumberPipe 
  ]
})
export class ResoryModule { }
