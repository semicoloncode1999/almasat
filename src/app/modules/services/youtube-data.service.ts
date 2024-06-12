import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { youtube } from '../interfaces/youtube.interface';

@Injectable({
  providedIn: 'root'
})
export class YoutubeDataService {

  url: string = environment.firebase.databaseURL;

  constructor(private http: HttpClient) { }


  getyoutubes(): Observable<youtube[]> {
    return this.http.get<youtube[]>(`${this.url}/youtube.json`)
  }

  // create and edit order
  create(key: string, action: string, data: any): Observable<youtube> {
    // don't worry about writing multiple return commond line  ===>>  because the function will use only one of them and skip others
    if (action && action != " ") {
      if (action == "add") {
        // note that Error will be occur when you forget to write  .json at the end of each firebase position url in each http request like this return this.http.post<youtube>(`... url .json`, data)
        // the Error in browser console ==>  Access to XMLHttpRequest at 'https://ecommerce-4cbbb-default-rtdb.firebaseio.com/(position)' from origin 'http://localhost:4200' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
        return this.http.post<youtube>(`${this.url}/youtube.json`, data)//function will use only this return depend on IF choice & skip others
      } else if (key != " " && key) {
        return this.http.put<youtube>(`${this.url}/youtube/${key}.json`, data)//function will use only this return depend on IF choice & skip others
      }
    }
    return this.http.post<youtube>(`${this.url}/error`, data)// this as a return value for => Observable<carasouel> object if we get error   &&   function will use only this return depend on IF choice & skip others
  }


  deleteItem(key: string) {
    if (key)
      this.http.delete(`${this.url}/youtube/${key}.json`).subscribe(() => {
      location.reload();
    })
  }
}
