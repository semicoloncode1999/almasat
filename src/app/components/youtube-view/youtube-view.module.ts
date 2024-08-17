import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeViewRoutingModule } from './youtube-view-routing.module';
import { YoutubeViewComponent } from './youtube-view.component';
import { YoutubeModule } from 'src/app/admin/youtube/youtube.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    YoutubeViewComponent
  ],
  imports: [
    CommonModule,
    YoutubeViewRoutingModule,
    YoutubeModule, // this is a shared module which we use a specific pipe declared in it & exported from it 
    NgxPaginationModule
  ]
})
export class YoutubeViewModule { }
