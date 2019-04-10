import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './../app-material/app-material.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,     

  ],
  imports: [
    AppMaterialModule
    , RouterModule
    , ReactiveFormsModule
    , BrowserModule
    , BrowserAnimationsModule
    , SidebarModule
    , SharedModule
    
  ],
  exports: [
    HomeComponent,
    LoginComponent

  ],
  providers: [],
})

export class PageModule { }