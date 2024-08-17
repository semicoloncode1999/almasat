import { Subscription } from 'rxjs';
import { product } from './../../modules/interfaces/product.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { customOptions } from 'src/app/modules/carasouel';
import { DataService } from 'src/app/modules/services/data.service';
import { carasouel } from 'src/app/modules/interfaces/carasouels.interface';
import { CarasouelsService } from 'src/app/modules/services/carasouels.service';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss', '../../modules/css-styles/producst.css']
})
export class RingsComponent implements OnInit, OnDestroy {

  paginationSize: number = 24;
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
          for (const key in data) {
            this.rings.push(data[key])
          }
        },
        complete: ()=> this.rings.reverse()
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
