import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { TranslateModule } from '@ngx-translate/core';


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
    NavbarComponent
    , TranslateModule

  ],
})
export class SharedModule { }