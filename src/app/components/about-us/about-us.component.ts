import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { aboutUs } from 'src/app/modules/interfaces/aboutUS.interface';
import { AboutUsDataService } from 'src/app/modules/services/about-us-data.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss', '../../modules/css-styles/producst.scss'],
  standalone:true,
  imports:[]
})
export class AboutUsComponent {
  aboutUs: aboutUs[] = []
  Subscriptions: Subscription[] = [];

  constructor(private dataServ: AboutUsDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.aboutUs = []
    this.Subscriptions.push(
      this.dataServ.getaboutUs().subscribe({
        next: data => {
          for (const key in data) {
            this.aboutUs.push(data[key])
          }
        },
      })
    )
  }
 


  ngOnDestroy() {
    for (const item of this.Subscriptions) {
      item.unsubscribe()
    }
  }
}
