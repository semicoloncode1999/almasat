import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../interfaces/product.interface';
import { environment } from 'src/environments/environment';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = environment.firebase.databaseURL;

  constructor(private http: HttpClient) { }


  getProducts(position: string): Observable<product[]> {
    return this.http.get<product[]>(`${this.url}/${position}.json`)
  }

  getProductsArray(postion: string): product[] {
    let arr: product[] = [];
    this.getProducts(postion).subscribe({
      next: (data) => {
        for (const key in data) {
          arr.push(data[key])
        }
      }
    })
    return arr;
  }

  // create and edit order
  createOrder(key: string, action: string, data: any): Observable<product> {
    if (data.category && data.category != " ") {
      if (action && action != " ") {
        if (action == "add") {
          // note that Error will be occur when you forget to write  .json at the end of each firebase position url in each http request like this return this.http.post<product>(`... url .json`, data)
          // the Error in browser console ==>  Access to XMLHttpRequest at 'https://ecommerce-4cbbb-default-rtdb.firebaseio.com/(position)' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
          return this.http.post<product>(`${this.url}/${data.category}.json`, data)
        } else if (key != " " && key) {
          return this.http.put<product>(`${this.url}/${data.category}/${key}.json`, data)
        }
      }
      return this.http.post<product>(`${this.url}/error`, data)
    }
    else
      return this.http.post<product>(`${this.url}/error`, data)
  }

  keyUpdate: string = ""

  deleteItem(obj: product) {
    this.getProducts(obj.category).subscribe(data => {
      for (const key in data) {
        if (obj.id == data[key].id) {
          this.http.delete(`${this.url}/${obj.category}/${key}.json`).subscribe(()=>{
            location.reload();
          })
        }
      }
    })
  }
}
