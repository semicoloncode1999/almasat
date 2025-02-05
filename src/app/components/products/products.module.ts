import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RingsModule } from '../rings/rings.module';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule,
    RingsModule, // we import it because it declares & exports the ToNumberPipe 
    NgOptimizedImage,
    ButtonModule,
    SkeletonModule
  ]
})
export class ProductsModule { }
