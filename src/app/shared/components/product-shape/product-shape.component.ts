import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { customOptions } from '../../helpers/carasouel';
import { ToNumberPipe } from 'src/app/modules/pipes/to-number.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'product-shape',
  templateUrl: './product-shape.component.html',
  styleUrls: ['./product-shape.component.scss'],
  standalone:true,
  imports:[ToNumberPipe, RouterModule]
})
export class ProductShapeComponent {
   @Input() item:any = {}
}
