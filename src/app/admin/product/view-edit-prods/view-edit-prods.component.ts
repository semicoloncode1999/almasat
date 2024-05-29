import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { product } from 'src/app/modules/interfaces/product.interface';
import { DataService } from 'src/app/modules/services/data.service';
import { UploadImagePromoService } from 'src/app/modules/services/upload-image-promo.service';

@Component({
  selector: 'app-view-edit-prods',
  templateUrl: './view-edit-prods.component.html',
  styleUrls: ['./view-edit-prods.component.scss', '../../../modules/css-styles/admin.styles.css']
})
export class ViewEditProdsComponent implements OnChanges{
  controlView: string = "add";

  promoImages: any[] = [];

  products: any[] = [];

  categories: string[] = ["ring", "gemstone", "rosary", "other"];

  imgFiles: any;

  @Input() dataInputView:string="";

  @Output() sendProduct:EventEmitter<product>=new EventEmitter();

  product = this.formBuilder.group({
    images: this.formBuilder.array([]),
    title: ["", Validators.required],
    category: ["", Validators.required],
    details: this.formBuilder.array([]),
    prices: this.formBuilder.array([]),
    // discount: ["", Validators.required],
    available: [, Validators.required],
  })

  constructor(private uploadImagePromoServ: UploadImagePromoService, private firestorage: AngularFireStorage,
    private dataServ: DataService, private formBuilder: FormBuilder) {
  }

  ngOnChanges(): void {
    this.controlView=this.dataInputView;
    this.products=this.dataServ.getProductsArray(this.dataInputView)
  }
  
  getItem(item: product) {
    this.sendProduct.emit(item)
  }

  deleteItem(item:product){
    this.dataServ.deleteItem(item)
  }

}


