import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { UsersMsgsComponent } from './users-msgs/users-msgs.component';

const routes: Routes = [
  {path : "" ,component :AdminComponent,children:[
    {path:"products" , loadChildren : () => import("./product/product.module" ).then(m => m.ProductModule)},
    {path:"carasouels"  , loadChildren : () => import("./carasouels/carasouels.module").then(m => m.CarasouelsModule)},
    {path:"youtube"  , loadChildren : () => import("./youtube/youtube.module").then(m => m.YoutubeModule)},
    {path:"about-us" , component:AboutUsComponent},
    {path:"social-links" , component:SocialLinksComponent},
    {path:"user-msgs" , loadChildren : () => import("./users-msgs/users-msgs.module").then(m => m.UsersMsgsModule)},
    // {path:"" , component:},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
