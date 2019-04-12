import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppBootstrapModule } from 'src/app/app-bootstrap/app-bootstrap.module';

@NgModule({
  imports: [
    CommonModule,
    , AppBootstrapModule
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