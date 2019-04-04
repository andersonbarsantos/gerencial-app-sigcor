import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
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
<<<<<<< HEAD
=======
        canActivate: [AuthGuard]
      },
      {
        path: 'funcionario',
        loadChildren: './pages/funcionario/funcionario.module#FuncionarioModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'home',
        component: HomeComponent,
        //loadChildren: './pages/home/home.module#homeModule',
>>>>>>> module
        canActivate: [AuthGuard]
      },
      {
        path: 'user',
        loadChildren: './pages/user/user.module#UserModule',
        canActivate: [AuthGuard]
<<<<<<< HEAD
=======

>>>>>>> module
      }

    ],
  },
  {
    path: 'login',
    component: LoginComponent
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

const config: ExtraOptions = {
  useHash: true,
  enableTracing: false
};


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, config)],

  exports: [RouterModule]
})
export class AppRoutingModule { }