import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderPopupComponent } from './header/header-popup/header-popup.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './body/login/login.component';
import { RegisterComponent } from './body/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './body/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderPopupComponent,
    BodyComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
