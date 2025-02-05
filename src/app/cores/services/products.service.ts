import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { strapiEnvironment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = strapiEnvironment.Api_URL;

  constructor(private http :HttpClient) { }

  getProducts():Observable<any>{
    let paramsObject:HttpParams = new HttpParams().set('populate','*');
    return this.http.get(this.url + 'products' , {params:paramsObject})
  }
  getProductById(id:number):Observable<any>{
    let paramsObject : HttpParams = new HttpParams().set('populate','*')
    return this.http.get(this.url + 'products/' + id , {params:paramsObject}).pipe(
      retry(3),
      catchError((error:any)=> throwError(()=> {
        console.log("**************");
        console.log(error);
        
      }))
    )
  }


  /*      Posts  EndPoint      */

  getPosts():Observable<any>{
    return this.http.get<any>(this.url + 'posts')
  }

  createPost( body:any):Observable<any>{
    return this.http.post(this.url + 'posts',body)
  }

  editPost(id:number, body:any):Observable<any>{
    return this.http.put(this.url + 'posts/' + id,body)
  }
}
