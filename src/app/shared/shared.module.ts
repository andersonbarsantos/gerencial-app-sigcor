<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarModule } from './sidebar/sidebar.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
    , SidebarModule
  ],
  providers: [
    
  ],
  declarations: [
    NavbarComponent,
    
  ],
  exports: [
    NavbarComponent,
    
  ],
})
=======

import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material/app-material.module';

import { NavbarComponent } from './navbar/navbar.component';
import { PageHeaderComponent } from './header/page-header.component';

@NgModule({
  declarations: [
    , NavbarComponent
    , PageHeaderComponent
  ],
  imports: [
    AppMaterialModule

  ],
  exports: [
    NavbarComponent
    , PageHeaderComponent
  ],
  providers: [],
})

>>>>>>> module
export class SharedModule { }