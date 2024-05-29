import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSocialMediaComponent } from './admin-social-media.component';

const routes: Routes = [
  {path:"",component : AdminSocialMediaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSocialMediaRoutingModule { }
