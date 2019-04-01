

import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'list' ,  pathMatch: 'full' },
  { path: 'list', component: UserListComponent },
];


@NgModule({
  declarations: [UserListComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [UserService]
})
export class UserModule {
}
