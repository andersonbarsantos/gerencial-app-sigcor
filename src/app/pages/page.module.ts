import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './../app-material/app-material.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//import { NavbarComponent } from '../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    //NavbarComponent, 

  ],
  imports: [

    AppMaterialModule
    , RouterModule
    , ReactiveFormsModule
    , BrowserModule
    , BrowserAnimationsModule
    , SidebarModule
    , SharedModule
    //, AppBootstrapModule
  ],
  exports: [
    HomeComponent,
    LoginComponent
  ],
  providers: [],
})

export class PageModule { }