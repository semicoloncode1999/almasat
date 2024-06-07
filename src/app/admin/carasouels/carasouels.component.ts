import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { UploadImagePromoService } from 'src/app/modules/services/upload-image-promo.service';

@Component({
  selector: 'app-carasouels',
  templateUrl: './carasouels.component.html',
  styleUrls: ['./carasouels.component.scss', '../../modules/css-styles/admin.form.product.styles.css', '../../modules/css-styles/change-position.drag-drop.css']
})
export class CarasouelsComponent {
  
  controlView: string = "add";
  promoImages: string[] = [];
  bigImages: any[] = [];
  categories: string[] = ["ring", "gemstone", "rosary", "other"];
  imgFiles: any[] = [];
  globalProduct: any;
  globalProductKey: string = "";
  loadingMsg: string = "";

  product = this.formBuilder.group({
    id: [new Date().getTime()],
    images: this.formBuilder.array([]),
    page: ["", Validators.required],
    // title: ["", Validators.required],
    // details: this.formBuilder.array([]),
  })
  constructor(private formBuilder:FormBuilder, private uploadServ:UploadImagePromoService){}

  carasouel=this.formBuilder.group({
    image:["",Validators.required],
    category:["",Validators.required],
    // title:["",Validators.required],
    // details:["",Validators.required],
    // link:["",Validators.required],
  })

  get imagesArray() {
    return this.product.get("images") as FormArray;
  }
  
    // --------------------- Reset Data ---------------------------
  resetData() {
    this.product.patchValue({
      id: new Date().getTime(),
      page: '',
    })
    this.imgFiles = []
    this.imagesArray.clear() // reset imagesArray in form from any data
    this.promoImages = [];
  }

  submit(){

  }

  uploadImages(event:any){
    this.uploadServ.uploadImg(event.target.files).then(()=> this.promoImages = this.uploadServ.imagesArray)
  }

}
