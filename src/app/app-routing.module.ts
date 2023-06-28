import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { AddprojectsComponent } from './component/addprojects/addprojects.component';
import { AddtasksComponent } from './component/addtasks/addtasks.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

import { ProjecttasksComponent } from './component/projecttasks/projecttasks.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserprojectsComponent } from './component/userprojects/userprojects.component';
import { UsertasksComponent } from './component/usertasks/usertasks.component';
import { ViewprojectComponent } from './component/viewproject/viewproject.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: 'user',component:UserDashboardComponent},
  {path: 'admin',component:AdminDashboardComponent},
  {path: 'userprojects',component:UserprojectsComponent},
  {path: 'usertasks',component:UsertasksComponent},
  {path:'addprojects',component:AddprojectsComponent},
  {path:'viewproject',component:ViewprojectComponent},
  {path:'projecttasks',component:ProjecttasksComponent},
  {path:'addtasks',component:AddtasksComponent},
  {path: 'projecttasks/:projectId',component: ProjecttasksComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
