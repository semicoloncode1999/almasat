import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { customOptions } from 'src/app/modules/carasouel';
import { carasouel } from 'src/app/modules/interfaces/carasouels.interface';
import { product } from 'src/app/modules/interfaces/product.interface';
import { CarasouelsService } from 'src/app/modules/services/carasouels.service';
import { DataService } from 'src/app/modules/services/data.service';

@Component({
  selector: 'app-resory',
  templateUrl: './resory.component.html',
  styleUrls: ['./resory.component.scss', '../../modules/css-styles/producst.css']
})
export class ResoryComponent implements OnInit, OnDestroy {


  paginationSize: number = 12;
  paginationCurrentPage: number = 1;
  rosarys: product[] = []
  Carasouels: carasouel[] = []
  Subscriptions: Subscription[] = [];

  constructor(private dataServ: DataService, private dataCarasouel: CarasouelsService) { }

  ngOnInit(): void {
    this.getData()
    this.getCarasouels()
  }

  getData() {
    this.rosarys = []
    this.Subscriptions.push(
      this.dataServ.getProducts("rosary").subscribe({
        next: data => {
          for (const key in data) {
            this.rosarys.push(data[key])
          }
        },
        complete: ()=> this.rosarys.reverse()
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
