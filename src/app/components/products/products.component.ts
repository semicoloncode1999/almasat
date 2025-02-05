import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/cores/services/products.service';
import { carasouel } from 'src/app/modules/interfaces/carasouels.interface';
import { product } from 'src/app/modules/interfaces/product.interface';
import { CarasouelsService } from 'src/app/modules/services/carasouels.service';
import { DataService } from 'src/app/modules/services/data.service';
import { strapiEnvironment as env } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss', '../../modules/css-styles/producst.css']
})
export class ProductsComponent {

  domain:string = env.domain
  paginationSize: number = 12;
  paginationCurrentPage: number = 1;
  products: product[] = []
  productsType: string = "";
  Carasouels: carasouel[] = []
  Subscriptions: Subscription[] = [];
  strapiBackendProducts:any=[]

  constructor(private dataServ: DataService, private dataCarasouel: CarasouelsService,
    private activatedRoute: ActivatedRoute, private router: Router, private productsServ:ProductsService) {
    router.events.subscribe(url => {
      if (url instanceof NavigationEnd) {
        this.productsType = activatedRoute.snapshot.paramMap.get("productsType")?.toString() ?? "";
        this.getData()
        this.getCarasouels()
      }
    })
    productsServ.getProducts().subscribe((res:any)=>{ 
      this.strapiBackendProducts = res.data
    })
  }

  getData() {
    this.products = []
    this.Subscriptions.push(
      this.dataServ.getProducts(this.productsType).subscribe({
        next: data => {
          for (const key in data) {
            this.products.push(data[key])
          }
        },
        complete: () => { this.products.reverse() }
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
