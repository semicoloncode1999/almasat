import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarasouelsRoutingModule } from './carasouels-routing.module';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarasouelsComponent } from './carasouels.component';
import { ViewItemsComponent } from '../view-items/view-items.component';
import { AdminModule } from '../admin.module';


@NgModule({
    imports: [
        CommonModule,
        CarasouelsRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CdkDrag,
        CdkDropList,
        AdminModule,
        CarasouelsComponent
    ]
})
export class CarasouelsModule { }
