import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarasouelsRoutingModule } from './carasouels-routing.module';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarasouelsComponent } from './carasouels.component';


@NgModule({
  declarations: [
    CarasouelsComponent
  ],
  imports: [
    CommonModule,
    CarasouelsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CdkDrag,
    CdkDropList,
  ]
})
export class CarasouelsModule { }
