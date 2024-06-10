import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewItemsComponent } from './view-items/view-items.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AdminComponent,
    ViewItemsComponent,
    SocialLinksComponent,
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    ViewItemsComponent
  ]
})
export class AdminModule { }
