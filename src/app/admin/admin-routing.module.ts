import { AddTranslationComponent } from './../translate/components/add-translation/add-translation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';

export const routes: Routes = [
  {
    path: "", component: AdminComponent, children: [
      { path: "products", loadChildren: () => import("./components/product/product.routes").then(r => r.routes) },
      { path: "carasouels", loadChildren: () => import("./components/carasouels/carasouels.routes").then(r => r.routes) },
      { path: "youtube", loadChildren: () => import("./components/youtube/youtube.routes").then(r => r.routes) },
      { path: "about-us", component: AboutUsComponent },
      { path: "social-links", component: SocialLinksComponent },
      { path: "user-msgs", loadChildren: () => import("./components/users-msgs/users-msgs.routes").then(r => r.routes) },
      // {path:"" , loadChildren :},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
