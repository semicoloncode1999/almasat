import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/modules/services/data.service';
import { UploadImagePromoService } from 'src/app/modules/services/upload-image-promo.service';

@Component({
  selector: 'app-admin-rings',
  templateUrl: './admin-rings.component.html',
  styleUrls: ['./admin-rings.component.scss', '../../modules/css-styles/admin.styles.css']
})
export class AdminRingsComponent {
  controlView: string = "add";

  promoImage: any[] = [];

  categories: string[] = ["ring", "gemstone", "rosary", "other"];

  pages: string[] = ["rings", "gemstone", "rosary", "other"];


  product = this.formBuilder.group({
    images: [],
    title: ["", Validators.required],
    category: ["", Validators.required],
    details: this.formBuilder.array([]),
    prices: this.formBuilder.array([]),
    available: [, Validators.required],
  })

  constructor(private uploadImagePromoServ: UploadImagePromoService, private dataServ: DataService, private formBuilder: FormBuilder) {
    this.addFormDetails()
    this.addFormPrice()
  }

  get detailsArray() {
    return this.product.get("details") as FormArray;
  }

  get priceArray() {
    return this.product.get("prices") as FormArray;
  }

  addFormDetails() {
    let addFormItem = this.formBuilder.group({
      details: ["", Validators.required]
    })
    this.detailsArray.push(addFormItem)
  }

  addFormPrice() {
    let addFormItem = this.formBuilder.group({
      price: [""]
    })
    this.priceArray.push(addFormItem)
  }

  upload(event: any) {
    // this.promoImage = this.uploadImagePromoServ.uploadImg(event);
  }

  submit() {
    this.dataServ.createOrder("", "", this.product.value)
    console.log(this.product.value)
  }

  // funcion to upload img file and get image url
  // async uploadImg(event:any){
  //   const file=event.target.files[0];
  //   if(file){
  //     const path=`postImages/${new Date().getTime()}${file.name}`;
  //     const uploadTask = await this.firestorage.upload(path,file)
  //     const url =await uploadTask.ref.getDownloadURL()
  //   }
  // }

}
