import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ZFooterComponent } from './components/z-footer/z-footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminModule } from './admin/admin.module';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ZFooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    AngularFireModule, // we import it manually for uploading files
    AngularFireStorageModule, BrowserAnimationsModule, // we import it manually for uploading files
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [
    // we write it manually for uploading files
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    { provide: HashLocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
