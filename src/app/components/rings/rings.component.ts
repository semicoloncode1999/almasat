import { Subscription } from 'rxjs';
import { product } from './../../modules/interfaces/product.interface';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from '@angular/core';
import { DataService } from 'src/app/modules/services/data.service';
import { carasouel } from 'src/app/modules/interfaces/carasouels.interface';
import { CarasouelsService } from 'src/app/modules/services/carasouels.service';
import { ToNumberPipe } from 'src/app/modules/pipes/to-number.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { ProductShapeComponent } from 'src/app/shared/components/product-shape/product-shape.component';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss', '../../modules/css-styles/producst.scss'],
  standalone: true,
  imports: [NgClass, RouterLink, NgxPaginationModule, ToNumberPipe, ProductShapeComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RingsComponent implements OnInit, OnDestroy {

  paginationSize: number = 12;
  paginationCurrentPage: number = 1;
  rings: product[] = []
  Carasouels: carasouel[] = []
  Subscriptions: Subscription[] = [];

  constructor(private dataServ: DataService, private dataCarasouel: CarasouelsService) { }

  ngOnInit(): void {
    this.getData();
    this.getCarasouels()
  }

  getData() {
    this.rings = []
    this.Subscriptions.push(
      this.dataServ.getProducts("ring").subscribe({
        next: data => {
          this.rings = data;
        },
        complete: () => this.rings.reverse()
      })
    )
  }
  getCarasouels() {
    this.Carasouels = []
    this.Subscriptions.push(
      this.dataCarasouel.getCarasouels().subscribe(data => {
        for (const key in data) {
          this.Carasouels.push(data[key])
        }
      })
    )
  }


  ngOnDestroy() {
    for (const item of this.Subscriptions) {
      item.unsubscribe()
    }
  }
}
