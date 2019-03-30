import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
        {
          path: 'dashboard',
          loadChildren: './pages/dashboard/dashboard.module#DashboardModule',
          canActivate: [AuthGuard]
        },
        {
          path: 'cliente',
          loadChildren: './pages/cliente/cliente.module#ClienteModule',
          canActivate: [AuthGuard]
        }],
      },
  {
      path: 'login',
      component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false, useHash:true })],
 
exports: [RouterModule]
})
export class AppRoutingModule { }