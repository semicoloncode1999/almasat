import { Injectable } from '@angular/core';
import { aboutUs } from '../interfaces/aboutUS.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutUsDataService {

  url: string = environment.firebase.databaseURL;

  constructor(private http: HttpClient) { }


  getaboutUs(): Observable<aboutUs[]> {
    return this.http.get<aboutUs[]>(`${this.url}/aboutUs.json`)
  }

  // create and edit order
  create(key: string, action: string, data: any): Observable<aboutUs> {
    // don't worry about writing multiple return commond line  ===>>  because the function will use only one of them and skip others
    if (action && action != " ") {
      if (action == "add") {
        // note that Error will be occur when you forget to write  .json at the end of each firebase position url in each http request like this return this.http.post<aboutUs>(`... url .json`, data)
        // the Error in browser console ==>  Access to XMLHttpRequest at 'https://ecommerce-4cbbb-default-rtdb.firebaseio.com/(position)' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
        return this.http.post<aboutUs>(`${this.url}/aboutUs.json`, data)//function will use only this return depend on IF choice & skip others
      } else if (key != " " && key) {
        return this.http.put<aboutUs>(`${this.url}/aboutUs/${key}.json`, data)//function will use only this return depend on IF choice & skip others
      }
    }
    return this.http.post<aboutUs>(`${this.url}/error`, data)// this as a return value for => Observable<carasouel> object if we get error   &&   function will use only this return depend on IF choice & skip others
  }


  deleteItem(key: string) {
    this.http.delete(`${this.url}/aboutUs/${key}.json`).subscribe(() => {
      location.reload();
    })
  }
}
