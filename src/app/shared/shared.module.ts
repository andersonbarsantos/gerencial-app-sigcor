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
export class SharedModule { }