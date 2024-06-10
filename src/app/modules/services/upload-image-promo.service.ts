import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UploadImagePromoService {

  constructor( private firestorage: AngularFireStorage, private formBuilder: FormBuilder) { }

  imagesArray: string[] = [];
  imgFiles: any[] = [];


  // --------------------------- change images to code --------------------------
  // promoImages: string[] = [];

  // readImages(event: any): string[] {
  //   for (const item of event.target.files) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(item);
  //     reader.onload = (e) => {
  //       this.promoImages.push(e.target?.result?.toString()!);
  //     }
  //   }
  //   return this.promoImages
  // }
  // ---------------------------------------------------------------------------


  // ---------------------------- upload images on server ----------------------------
  async uploadImg(arr: any) {
    this.imgFiles=[];
    for (const item of arr) {
      this.imgFiles.push(item)
    }
    if (this.imgFiles.length) {
      for (const item of this.imgFiles) {
        const path = `Images/${new Date().getTime()}${item.name}`;
        const uploadTask = await this.firestorage.upload(path, item);
        const url = await uploadTask.ref.getDownloadURL();
        this.imagesArray.push(url);  // always push formGroup in any formArray
      }
    }
    return this.imagesArray
  }

}
