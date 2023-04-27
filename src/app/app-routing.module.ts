//import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AdminComponent } from './components/admin/admin.component';
import { AllCustomerComponent } from './components/admin/all-customers/all-customers.component';
import { ChangePasswordComponent } from './components/customer/change-password/change-password.component';
import { CustomerDocumentsComponent } from './components/customer/customer-documents/customer-documents.component';
import { CustomerComponent } from './components/customer/customer.component';
//import { EditprofileComponent } from './components/customer/editprofile/editprofile.component';
import { ProfileComponent } from './components/customer/profile/profile.component';
import { UpdateProfileComponent } from './components/customer/update-profile/update-profile.component';
import { FooterComponent } from './components/footer/footer.component';
//import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
//import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';



const routes: Routes = [
  {path:"Navbar",component:NavbarComponent},
  //{ path: '', component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'footer',component:FooterComponent},
  //{path:'header',component:HeaderComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'all-customer',component:AllCustomerComponent},
  ]},
  {path:'customer',component:CustomerComponent,children:[
    {path:'change-password',component:ChangePasswordComponent},
    {path:'profile',component:ProfileComponent},
    {path:'update-profile',component:UpdateProfileComponent},
    {path:'customer-documents',component:CustomerDocumentsComponent},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }