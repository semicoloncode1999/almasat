import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce';

  appView:boolean=true;

  constructor(private route:Router){
    route.events.subscribe(url =>{
      if (url instanceof NavigationEnd){
        if(url.url.includes("admin")){
          this.appView = false
        }
      }
    })
  }
}
