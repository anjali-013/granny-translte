import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LoginComponent } from './login/login.component';
 
@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    LoginComponent,
    

  ],
  

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    ServerModule,
    MatIconModule,
    ReactiveFormsModule,
    CarouselModule,
      MatDialogModule,
  

  ],

  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule  { }

