import { customOptions } from './../../modules/carasouel';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { product } from 'src/app/modules/interfaces/product.interface';
import { DataService } from 'src/app/modules/services/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss' , '../../modules/css-styles/producst.css']
})
export class HomeComponent implements OnInit , OnDestroy{

  ringsInHome:product[]=[]
  rosaryInHome:product[]=[]
  Subscriptions:Subscription[]=[];
  customOptions:OwlOptions =customOptions

  constructor(private dataServ:DataService,private scoller:ViewportScroller){}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.ringsInHome=[]
    this.rosaryInHome=[]
    this.Subscriptions.push(
      this.dataServ.getProducts("ring").subscribe(data=>{
        for (const key in data) {
          if(data[key].showOnHome=="true")
            this.ringsInHome.push(data[key])
        }
      })
    )
    this.Subscriptions.push(
      this.dataServ.getProducts("rosary").subscribe(data=>{
        for (const key in data) {
          if(data[key].showOnHome=="true")
            this.rosaryInHome.push(data[key])
        }
      })
    )
  }

  scrollTo(){
    this.scoller.scrollToAnchor("pro")
  }

  ngOnDestroy(){
    for (const item of this.Subscriptions) {
      item.unsubscribe()
    }
  }
}
