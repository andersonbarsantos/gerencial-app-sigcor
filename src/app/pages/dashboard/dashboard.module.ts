import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppBootstrapModule } from 'src/app/app-bootstrap/app-bootstrap.module';

import { DashboardComponent } from './view/Dashboard.Component';
import { PageHeaderComponent } from 'src/app/shared/header/page-header.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent, PageHeaderComponent],
  imports: [CommonModule
    , RouterModule.forChild(routes)
    , AppBootstrapModule],
})

export class DashboardModule { }
