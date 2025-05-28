import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ZFooterComponent } from './components/z-footer/z-footer.component';
import { HomeComponent } from './components/home/home.component';
// import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage' // we import it manually for uploading files
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' // we import it manually for uploading files
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { HashLocationStrategy } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AdminModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    AngularFireModule, // we import it manually for uploading files
    AngularFireStorageModule, BrowserAnimationsModule, // we import it manually for uploading files
    ToastrModule.forRoot(),
    NgxPaginationModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    SkeletonModule
  ],
  exports:[
    // ToNumberPipe,
  ],
  providers: [
    // we write it manually for uploading files
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: HashLocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: []
})
export class AppModule { }
