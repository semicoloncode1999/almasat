import { FormBuilder, Validators } from '@angular/forms';
import { socialLinks, whatsapp } from './../../modules/interfaces/socialLinks.interface';
import { SocialMediaService } from './../../modules/services/social-media.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { product } from 'src/app/modules/interfaces/product.interface';
import { DataService } from 'src/app/modules/services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss', '../../modules/css-styles/producst.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  idProduct: any[] = [];
  Subscriptions: Subscription[] = [];
  product: product = {} as product;

  whatsapp: whatsapp = {} as whatsapp;
  productMsg: string = "";

  personData = this.formBuilder.group({
    name:["",Validators.required],
    phone:["",Validators.required],
    address:["",Validators.required],
    // name:["",Validators.required],
  })

    constructor(private activatedRoute: ActivatedRoute, private dataServ: DataService,
       private socialServ: SocialMediaService, private formBuilder: FormBuilder) {
  this.idProduct = activatedRoute.snapshot.paramMap.get("id")?.split("-")!
}

ngOnInit(): void {
  this.Subscriptions.push(
    this.dataServ.getProducts(this.idProduct[0]).subscribe({
      next: data => {
        for (const key in data) {
          if (data[key].id == this.idProduct[1]) {
            this.product = data[key]
            break;
          }
        }
      }, complete: () => this.getWhatsapp()
    })
  )
}

getWhatsapp() {
  this.Subscriptions.push(
    this.socialServ.getSocialLinks().subscribe({
      next: data => {
        for (const key in data) {
          if (key == "whatsapp")
            this.whatsapp = data[key]
        }
      }, complete: () => this.productMsg = `مرحبا اريد الحصول علي هذ المنتج  :  %0A رابط المنتج  :  ${this.product.id} %0A الاسم : ${this.personData.value.name}  %0A رقم الهاتف : ${this.personData.value.phone}  %0A العنوان : ${this.personData.value.address} `
    })
  )
}

RequestData(){
  this.productMsg = `مرحبا اريد الحصول علي هذ المنتج  :  %0A رابط المنتج  :  ${this.product.id} %0A الاسم : ${this.personData.value.name}  %0A رقم الهاتف : ${this.personData.value.phone}  %0A العنوان : ${this.personData.value.address} `
}

ngOnDestroy() {
  for (const item of this.Subscriptions) {
    item.unsubscribe()
  }
}

}
