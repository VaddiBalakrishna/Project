import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllCustomerComponent } from './components/admin/all-customers/all-customers.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/customer/profile/profile.component';
import { CustomerDocumentsComponent } from './components/customer/customer-documents/customer-documents.component';
import { UpdateProfileComponent } from './components/customer/update-profile/update-profile.component';
import { ChangePasswordComponent } from './components/customer/change-password/change-password.component';
//import { AdvertisingHomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    CustomerComponent,
    ProfileComponent,
    AdminComponent,
    AllCustomerComponent,
    CustomerDocumentsComponent,
    UpdateProfileComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
