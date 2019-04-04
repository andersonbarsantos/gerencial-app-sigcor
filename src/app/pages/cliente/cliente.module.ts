import { NgModule } from '@angular/core';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list' ,  pathMatch: 'full' },
  { path: 'list', component: ClienteListComponent },
];

@NgModule({
  declarations: [ClienteListComponent],
  imports: [RouterModule.forChild(routes)],
})
export class ClienteModule { }
