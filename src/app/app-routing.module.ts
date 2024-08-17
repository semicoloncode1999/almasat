import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RingsComponent } from './components/rings/rings.component';
import { ResoryComponent } from './components/resory/resory.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: "home", redirectTo: "", pathMatch: "full" },
  { path: "", component: HomeComponent },
  { path: "rings", loadChildren: ()=> import("./components/rings/rings.module").then(m=>m.RingsModule) },
  { path: "rosary", loadChildren : ()=> import("./components/resory/resory.module").then(m=>m.ResoryModule) },
  { path: "youtube",  loadChildren: () => import("./components/youtube-view/youtube-view.module").then(m => m.YoutubeViewModule) },
  { path: "about-us", component: AboutUsComponent },
  { path: "prodcut-details/:id", component: ProductDetailsComponent },
  { path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,scrollPositionRestoration:"enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
