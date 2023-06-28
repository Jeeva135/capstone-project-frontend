import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserprojectsComponent } from './component/userprojects/userprojects.component';
import { UsertasksComponent } from './component/usertasks/usertasks.component';
import { HomeComponent } from './home/home.component';
import { AddprojectsComponent } from './component/addprojects/addprojects.component';
import { ViewprojectComponent } from './component/viewproject/viewproject.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjecttasksComponent } from './component/projecttasks/projecttasks.component';
import { AddtasksComponent } from './component/addtasks/addtasks.component';
import { ListtasksComponent } from './component/listtasks/listtasks.component';
import { FooterComponent } from './footer/footer.component';
import { NavuserComponent } from './navuser/navuser.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    UserprojectsComponent,
    UsertasksComponent,
    HomeComponent,
    AddprojectsComponent,
    ViewprojectComponent,
    NavbarComponent,
    ProjecttasksComponent,
    AddtasksComponent,
    ListtasksComponent,
    FooterComponent,
    NavuserComponent,
    AboutComponent,
    ContactComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
