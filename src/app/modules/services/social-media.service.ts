import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { socialLinks } from '../interfaces/socialLinks.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  url: string = environment.firebase.databaseURL;

  constructor(private http:HttpClient) { }

  getSocialLinks():Observable<any>{
    return this.http.get<any>(`${this.url}/socialLinks.json`)
  }

  getWhatsappLinks(position:string):Observable<socialLinks[]>{
    return this.http.get<socialLinks[]>(`${this.url}/socialLinks/whatsapp.json`)
  }

  socialWhatsappLinks(data:any){
    return this.http.put(`${this.url}/socialLinks/whatsapp.json`,data)
  }

  socialLinks(position:string,data:any){
    return this.http.put(`${this.url}/socialLinks/${position}.json`,data)
  }
}
