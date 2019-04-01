import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './view/Dashboard.Component';
import { AppBootstrapModule } from 'src/app/app-bootstrap/app-bootstrap.module';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [RouterModule.forChild(routes) , AppBootstrapModule],
})

export class DashboardModule {}
