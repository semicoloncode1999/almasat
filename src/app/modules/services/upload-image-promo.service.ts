import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadImagePromoService {

  constructor() { }

  promoImage: string[] = [];

  upload(event: any): string[] {
    this.promoImage = []
    for (const item of event.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(item);
      reader.onload = (e) => {
        this.promoImage.push(e.target?.result?.toString()!);
      }
    }
    return this.promoImage
  }

}
