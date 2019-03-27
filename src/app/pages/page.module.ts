import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './../app-material/app-material.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    AppMaterialModule
    , ReactiveFormsModule
    , BrowserModule
    , BrowserAnimationsModule


  ],
  exports: [
    HomeComponent,
    LoginComponent],
  providers: [],
})

export class PageModule { }