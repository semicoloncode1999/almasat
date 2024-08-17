import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { youtube } from 'src/app/modules/interfaces/youtube.interface';
import { YoutubeDataService } from 'src/app/modules/services/youtube-data.service';

@Component({
  selector: 'app-youtube-view',
  templateUrl: './youtube-view.component.html',
  styleUrls: ['./youtube-view.component.scss', '../../modules/css-styles/producst.css']
})
export class YoutubeViewComponent implements OnDestroy, OnInit {

  paginationSize: number = 25;
  paginationCurrentPage: number = 1;
  youtubes: youtube[] = []
  Subscriptions: Subscription[] = [];

  constructor(private dataServ: YoutubeDataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.youtubes = []
    this.Subscriptions.push(
      this.dataServ.getyoutubes().subscribe({
        next: data => {
          for (const key in data) {
            this.youtubes.push(data[key])
          }
        },
        complete: ()=> this.youtubes.reverse()
      })
    )
  }

  ngOnDestroy() {
    for (const item of this.Subscriptions) {
      item.unsubscribe()
    }
  }
}
