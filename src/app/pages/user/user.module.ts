

import { NgModule } from '@angular/core';

import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'list' ,  pathMatch: 'full' },
  { path: 'list', component: UserListComponent },
  { path: 'detail', component: UserDetailComponent },
];


@NgModule({
  declarations: [UserListComponent,   UserDetailComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [UserService]
})
export class UserModule {
}
