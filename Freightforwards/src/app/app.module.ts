import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ServicesComponent } from './services/services.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FaqComponent } from './faq/faq.component';
import { OfficePageComponent } from './office-page/office-page.component';
import { HousePageComponent } from './house-page/house-page.component';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { PaymentComponent } from './payment/payment.component';
import { AuthConfigModule } from './auth/auth-config.module';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    ServicesComponent,
    LogoutComponent,
    AboutPageComponent,
    ContactPageComponent,
    FaqComponent,
    OfficePageComponent,
    HousePageComponent,
    ForgotPasswordComponent,
    PaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AuthConfigModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
