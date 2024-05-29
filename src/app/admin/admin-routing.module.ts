import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {path : "" ,component :AdminComponent,children:[
    {path:"rings" , loadChildren : () => import("./admin-rings/admin-rings.module").then(m => m.AdminRingsModule)},
    {path:"gemstones"  , loadChildren : () => import("./admin-gemstones/admin-gemstones.module").then(m => m.AdminGemstonesModule)},
    {path:"rosary"  , loadChildren : () => import("./admin-rosary/admin-rosary.module").then(m => m.AdminRosaryModule)},
    {path:"products" , loadChildren : () => import("./product/product.module" ).then(m => m.ProductModule)},
    {path:"media"  , loadChildren : () => import("./admin-social-media/admin-social-media.module").then(m => m.AdminSocialMediaModule)},
    {path:"about"  , loadChildren : () => import("./admin-about/admin-about.module").then(m => m.AdminAboutModule)},
    // {path:"" , component:},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
