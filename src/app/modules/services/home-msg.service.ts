import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeMsgService {
  
  url: string = environment.firebase.databaseURL;

  constructor(private http: HttpClient) { }

  sendUserMssage(Data:any){
    return this.http.post(`${this.url}/userMessages.json`,Data)
  }

  getUserMssage():Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/userMessages.json`)
  }

}
