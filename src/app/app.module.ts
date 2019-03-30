import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeLayoutComponent } from './layouts/home-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout.component';

import { AppConfigService } from './app-config.service';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ComponentsModule } from './components/components.module';
import { PageModule } from './pages/page.module';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TranslateService } from '@ngx-translate/core';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationService } from './auth/authentication.service';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
    , HttpClientModule
    , TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
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
  providers: [
    AuthenticationService
    , AppConfigService
    , TranslateService
    , { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    , { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

    // provider used to create fake backend
    , fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }