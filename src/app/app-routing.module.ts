import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './body/register/register.component';
import { LoginComponent } from './body/login/login.component';
import { HomeComponent } from './body/home/home.component';
import { registerLocaleData } from '@angular/common';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
