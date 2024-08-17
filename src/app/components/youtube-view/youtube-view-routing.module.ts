import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeViewComponent } from './youtube-view.component';

const routes: Routes = [
  {path:"", component:YoutubeViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeViewRoutingModule { }
