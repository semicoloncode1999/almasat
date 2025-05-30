import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { YoutubeSafeurlPipe } from 'src/app/modules/pipes/youtube-safeurl.pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    YoutubeComponent,
    YoutubeSafeurlPipe
  ],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports:[
    YoutubeSafeurlPipe
  ]
})
export class YoutubeModule { }
