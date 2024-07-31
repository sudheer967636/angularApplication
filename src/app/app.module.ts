import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SharedServiceService } from './services/shared-service.service';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
 import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './components/log-in/log-in.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import { AboutComponent } from './components/about/about.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';





@NgModule({
  declarations: [
    CustomPipePipe,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LogInComponent,
    NotFoundComponent,
    AboutComponent,
    RegistrationComponent,
    CategoriesComponent,
    CartComponent,
    ProductDetailsComponent,
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   FormsModule,
   HttpClientModule,
   BrowserAnimationsModule,
   MatToolbarModule,
   MatButtonModule,
   MatIconModule,
   MatFormFieldModule,
   MatInputModule,
   MatProgressSpinnerModule,
   MatDialogModule,
   ReactiveFormsModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
