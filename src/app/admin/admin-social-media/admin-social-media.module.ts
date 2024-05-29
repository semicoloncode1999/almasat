import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSocialMediaRoutingModule } from './admin-social-media-routing.module';
import { AdminSocialMediaComponent } from './admin-social-media.component';


@NgModule({
  declarations: [
    AdminSocialMediaComponent
  ],
  imports: [
    CommonModule,
    AdminSocialMediaRoutingModule
  ]
})
export class AdminSocialMediaModule { }
