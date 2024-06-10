import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { carasouel } from '../interfaces/carasouels.interface';
import { filter } from "rxjs/operators"
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CarasouelsService {
  url: string = environment.firebase.databaseURL;
  keyUpdate: string = ""

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getCarasouels(): Observable<carasouel[]> {
    return this.http.get<carasouel[]>(`${this.url}/carasouels.json`)
  }


  getCarasouelsArray(page: string) {
    // note that we can't use some of 'rxjs/operators' becase of firebase don't return data-objects directly but it returns string keys refers to them in array 
    // this.getCarasouels().pipe(filter(item => item.page == page)).subscribe({...})  
    let arr: carasouel[] = [];
    this.getCarasouels().subscribe({
      next: data => {
        for (const key in data) {
          if (data[key].page == page)
            arr.push(data[key])
        }
      }
    })
    return arr
  }


  // create and edit order
  create(key: string, data: any): Observable<carasouel> {
    // note that Error will be occur when you forget to write  .json at the end of each firebase position url in each http request like this return this.http.post<carasouel>(`... url .json`, data)
    // the Error in browser console ==>  Access to XMLHttpRequest at 'https://ecommerce-4cbbb-default-rtdb.firebaseio.com/(position)' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
    return this.http.put<carasouel>(`${this.url}/carasouels/${key}.json`, data)//function will use only this return depend on IF choice & skip others
  }


}
