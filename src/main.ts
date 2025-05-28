import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { AdminModule } from './app/admin/admin.module';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HashLocationStrategy } from '@angular/common';
import { environment } from './environments/environment';
import { FIREBASE_OPTIONS, AngularFireModule } from '@angular/fire/compat';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, AppRoutingModule, AdminModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideDatabase(() => getDatabase()), provideStorage(() => getStorage()), AngularFireModule, // we import it manually for uploading files
        AngularFireStorageModule, // we import it manually for uploading files
        ToastrModule.forRoot(), NgxPaginationModule, CarouselModule, FormsModule, ReactiveFormsModule, // we import it because it declares & exports the ToNumberPipe 
        SkeletonModule),
        // we write it manually for uploading files
        { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
        { provide: HashLocationStrategy, useClass: HashLocationStrategy },
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  .catch(err => console.error(err));
