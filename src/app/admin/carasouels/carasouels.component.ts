import { CdkDragDrop, moveItemInArray, CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, OnDestroy } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormArray, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { carasouel } from 'src/app/modules/interfaces/carasouels.interface';
import { CarasouelsService } from 'src/app/modules/services/carasouels.service';
import { DataService } from 'src/app/modules/services/data.service';
import { UploadImagePromoService } from 'src/app/modules/services/upload-image-promo.service';

@Component({
    selector: 'app-carasouels',
    templateUrl: './carasouels.component.html',
    styleUrls: ['./carasouels.component.scss', '../../modules/css-styles/admin.form.product.styles.css', '../../modules/css-styles/change-position.drag-drop.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, CdkDropList, CdkDrag]
})
export class CarasouelsComponent implements OnDestroy {

  controlView: string = "data";
  promoImages: string[] = [];
  carasouels: carasouel[] = [];
  categories: string[];
  globalCarasouelObject!: carasouel;
  globalCarasouelObjectKey!: string;
  loadingMsg: string = "";
  subscribtions: Subscription[] = [];

  
  carasouel = this.formBuilder.group({
    id: [new Date().getTime()],
    images: this.formBuilder.array([], Validators.minLength(1)),
    page: ["", Validators.required],
    // title:["",Validators.required],
    // details:["",Validators.required],
    // link:["",Validators.required],
  })

  get imagesArray() {
    return this.carasouel.get("images") as FormArray;
  }

  constructor(private formBuilder: FormBuilder, private productServ: DataService, private uploadServ: UploadImagePromoService
    , private toastr: ToastrService, private firestorage: AngularFireStorage, private carasouelServ: CarasouelsService) {
    this.categories = productServ.productCategories;
    this.getCarasouelCategory('')
  }

  // ------------------------------- Reset Data ------------------------------
  resetData() {
    this.carasouel.patchValue({
      id: new Date().getTime(),
      page: '',
    })
    this.globalCarasouelObject = {} as carasouel;
    this.imagesArray.clear() // reset imagesArray in form from any data
    this.promoImages = [];
    this.uploadServ.imagesArray = [] // at upload service
    this.carasouels=[]
  }

  // --------------------- upload images Array on server ---------------------
  uploadImages(event: any) {
    this.loadingMsg = "uploading";
    this.uploadServ.uploadImg(event.target.files).then((resolve) => {
      this.promoImages = resolve;
      this.orderingProductImages()
      this.loadingMsg = "";
    })
  }

  //-------------------------- ordering images Array -------------------------
  drop(event: CdkDragDrop<any[]>) { // note that we change the type to  any in  =>   event: CdkDragDrop<any[]>
    moveItemInArray(this.promoImages, event.previousIndex, event.currentIndex); // this line for  ordering the  promo images
    this.uploadServ.imagesArray = this.promoImages
    this.orderingProductImages()
  }

  // ---------- ordering carasouel images after darg drop ordering ------------
  orderingProductImages() {
    this.imagesArray.clear() // reset imagesArray in formBuilder  => from any data
    for (const item of this.promoImages) {
      let img = this.formBuilder.group({
        img: item
      })
      this.imagesArray.push(img);  // always push formGroup in any formArray
    }
  }

  // ----------------------------  get Carasouel Category ----------------------------
  getCarasouelCategory(event: any) {
    this.resetData()
    this.subscribtions.push(this.carasouelServ.getCarasouels().subscribe({
      next: data => {
        for (const key in data) {
          if (this.controlView == "edit") {
            if (data[key].page == event.target.value) {
              this.globalCarasouelObject = data[key];
              this.globalCarasouelObjectKey = key
              break;
            }
          } else {
            this.carasouels.push(data[key])
          }
        }
      }, complete: () => {
        if (this.controlView == "edit") {
          this.carasouel.patchValue({
            id: this.globalCarasouelObject.id,
            page: this.globalCarasouelObject.page,
          })
          for (const iterator of this.globalCarasouelObject.images) {
            this.promoImages.push(iterator.img);
          }
          this.uploadServ.imagesArray = this.promoImages
        }
      }
    }))
  }

  // ---------------------------- submit ----------------------------
  submit() {
    if (this.carasouel.valid) {
      this.subscribtions.push(this.carasouelServ.create(this.globalCarasouelObjectKey, this.carasouel.value).subscribe(() => {
        this.resetData()
        this.toastr.success("carasouel uploaded successfully")
        this.getCarasouelCategory('');
        this.controlView='data'
      }))
    } else
      this.toastr.error("complete all carasouel data")
  }


  // ---------------------------- delete item ----------------------------
  del(index: number) {
    this.firestorage.refFromURL(this.promoImages[index]).delete()
    this.promoImages.splice(index, 1);
    this.uploadServ.imagesArray = this.promoImages
    this.orderingProductImages();
  }

  ngOnDestroy(): void {
    for (const iterator of this.subscribtions) {
      iterator.unsubscribe()
    }
  }
}
