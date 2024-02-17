import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ServicesComponent } from './services/services.component';
import { AuthGuard } from './auth.guard';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FaqComponent } from './faq/faq.component';
import { OfficePageComponent } from './office-page/office-page.component';
import { HousePageComponent } from './house-page/house-page.component';
import { PaymentComponent } from './payment/payment.component';





const routes: Routes = [
  {path:'', component:HomePageComponent},
   {path:'home', component:HomePageComponent},
   {path : 'logout', component:LoginComponent},
   {path:'register', component:RegistrationComponent},
   {path:'login', component:LoginComponent},
   {path:'services',component:ServicesComponent,canActivate:[AuthGuard]},
   {path:'about',component:AboutPageComponent,canActivate:[AuthGuard]},
   {path:'services/office-page',component:OfficePageComponent},
   {path: 'services/house-page',component:HousePageComponent},
   {path: 'contact',component:ContactPageComponent,canActivate:[AuthGuard]},
   {path: 'faq',component:FaqComponent,canActivate:[AuthGuard]},
   {path:'payment',component:PaymentComponent},
   {path:'services/house-page/office-page',component:OfficePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
