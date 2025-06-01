import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewItemsComponent } from './components/view-items/view-items.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
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
    ],
    exports: [
        ViewItemsComponent
    ]
})
export class AdminModule { }
