import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewEditProdsComponent } from './view-edit-prods/view-edit-prods.component';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    ProductComponent,
    ViewEditProdsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CdkDrag,
    CdkDropList,
  ]
})
export class ProductModule { }
