import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';

import { AppConfigService } from './app-config.service';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ComponentsModule } from './components/components.module';
import { PageModule } from './pages/page.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule
    , CommonModule
    , AppRoutingModule
    , ReactiveFormsModule
    , BrowserAnimationsModule
    , AppMaterialModule
    , AppBootstrapModule
    , ComponentsModule
    , PageModule
  ],

  exports: [],
  providers: [AuthService, AuthGuard, AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }