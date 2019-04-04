import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioViewComponent } from './funcionario-view/funcionario-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'list' ,  pathMatch: 'full' },
  { path: 'list', component: FuncionarioListComponent },
  { path: 'view', component: FuncionarioViewComponent },
];

@NgModule({
  declarations: [FuncionarioListComponent, FuncionarioViewComponent],
  imports: [RouterModule.forChild(routes)],
})
export class FuncionarioModule { }
