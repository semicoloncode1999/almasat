import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Component } from '@angular/core';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { DataService } from 'src/app/modules/services/data.service';
import { UploadImagePromoService } from 'src/app/modules/services/upload-image-promo.service';
import { product } from 'src/app/modules/interfaces/product.interface';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss', '../../modules/css-styles/admin.styles.css' ,'../../modules/css-styles/admin.drag-drop.css']
})
export class ProductComponent {
  controlView: string = "add";
  promoImages: string[] = [];
  categories: string[] = ["ring", "gemstone", "rosary", "other"];
  imgFiles: any[] = [];
  globalProduct: any;
  globalProductKey: string = "";

  product = this.formBuilder.group({
    id: [new Date().getTime()],
    images: this.formBuilder.array([]),
    title: ["", Validators.required],
    category: ["", Validators.required],
    details: this.formBuilder.array([]),
    prices: this.formBuilder.array([]),
    // discount: ["", Validators.required],
    available: [true, Validators.required],
  })

  constructor(private uploadImagePromoServ: UploadImagePromoService, private firestorage: AngularFireStorage,
    private dataServ: DataService, private formBuilder: FormBuilder) {
    this.addFormDetails()
    this.addFormPrice()
  }

  get imagesArray() {
    return this.product.get("images") as FormArray;
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
    this.detailsArray.push(addFormItem)  // always push formGroup in any formArray
  }

  addFormPrice() {
    let addFormItem = this.formBuilder.group({
      price: [""]
    })
    this.priceArray.push(addFormItem)  // always push formGroup in any formArray
  }

  // ---------------------------- upload images ---------------------------
  upload(event: any) {
    for (const item of event.target.files) {
      this.imgFiles.push(item)
    }
    this.promoImages = this.uploadImagePromoServ.upload(event);
  }

  // funcion to upload img file and get image url
  async uploadImg() {
    if (this.imgFiles.length) {
      this.imagesArray.clear();
      for (const item of this.imgFiles) {
        const path = `Images/${new Date().getTime()}${item.name}`;
        const uploadTask = await this.firestorage.upload(path, item);
        const url = await uploadTask.ref.getDownloadURL();
        let img = this.formBuilder.group({
          img: url
        })
        this.imagesArray.push(img);  // always push formGroup in any formArray
      }
      this.submit()
    } else if (this.controlView == 'edit') {
      this.submit()
    }
  }

  // --------------------- Reset Data ---------------------------
  resetData() {
    this.product.patchValue({
      id: new Date().getTime(),
      title: '',
      category: '',
      available: true,
    })
    this.imgFiles=[]
    this.imagesArray.clear() // reset imagesArray in form from any data
    this.detailsArray.clear() // reset detailsArray in form from any data
    this.priceArray.clear() // reset priceArray in form from any data
    this.addFormDetails()
    this.addFormPrice()
    this.promoImages = [];
    
  }

  // --------------------- send Item---------------------------
  submit() {
    if (this.product.valid) {
      if (this.controlView == "add") {
        this.dataServ.createOrder("", this.controlView, this.product.value).subscribe(()=>{
          this.resetData();
        })
      } else {
        this.dataServ.getProducts(this.globalProduct.category).subscribe(data => {
          for (const key in data) {
            if (this.globalProduct.id == data[key].id) {
              this.dataServ.createOrder(key, this.controlView, this.product.value).subscribe(()=>{
                this.resetData();
              })
              break;
            }
          }
        })
      }
    }
  }

  // --------------------- remove last detail Item---------------------------
  removeDetail(index: number) {
    if (index != 0)
      this.detailsArray.removeAt(index)
  }
  // --------------------- remove last price Item---------------------------
  removePrice(index: number) {
    if (index != 0)
      this.priceArray.removeAt(index)
  }

  // --------------------- Get Item data for Edit And Delete ---------------------------
  getItem(item: any) {
    this.resetData()
    this.controlView = "edit";
    this.globalProduct = item;
    this.detailsArray.removeAt(0) // reset details form
    this.priceArray.removeAt(0) // reset price form
    this.product.patchValue({
      id: item.id,
      title: item.title,
      category: item.category,
      available: item.available,
    })
    // get all images
    for (const obj of item.images) {
      let img = this.formBuilder.group({
        img: obj.img
      })
      this.promoImages.push(obj.img)
      this.imagesArray.push(img);  // always push formGroup in any formArray
    }
    // get all detsils
    for (const obj of item.details) {
      let detail = this.formBuilder.group({
        details: obj.details
      })
      this.detailsArray.push(detail);  // always push formGroup in any formArray
    }
    // get all prices
    for (const obj of item.prices) {
      let price = this.formBuilder.group({
        price: obj.price
      })
      this.priceArray.push(price);  // always push formGroup in any formArray
    }
  }

  drop(event: CdkDragDrop<any[]>) { // note that we change the type to  any in  =>   event: CdkDragDrop<any[]>
    if(this.imgFiles.length && (this.controlView=='add' || this.controlView == 'edit')){
      moveItemInArray(this.promoImages, event.previousIndex, event.currentIndex); // this line for  ordering the  promo images
      moveItemInArray(this.imgFiles, event.previousIndex, event.currentIndex); // this line for  ordering the  images Files
    }else if(this.controlView == 'edit'){
      moveItemInArray(this.promoImages, event.previousIndex, event.currentIndex); // this line for  ordering the  promo images
      this.imagesArray.clear()
      for (const item of this.promoImages) {
        let img = this.formBuilder.group({
          img: item
        })
        this.imagesArray.push(img);  // always push formGroup in any formArray
      }
    }
  }


}

