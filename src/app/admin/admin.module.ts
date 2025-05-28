import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewItemsComponent } from './view-items/view-items.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        AdminComponent,
        ViewItemsComponent,
        SocialLinksComponent,
        AboutUsComponent
    ],
    exports: [
        ViewItemsComponent
    ]
})
export class AdminModule { }
