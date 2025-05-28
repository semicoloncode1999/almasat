import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ToNumberPipe } from 'src/app/modules/pipes/to-number.pipe';
import { customOptions } from '../../helpers/carasouel';

@Component({
  selector: 'products-carousel',
  standalone: true,
  imports: [CarouselModule, ToNumberPipe],
  templateUrl: './products-carousel.component.html',
  styleUrl: './products-carousel.component.scss'
})
export class ProductsCarouselComponent {
  customOptions: OwlOptions = customOptions;

  @Input() array: any[] = []
}
