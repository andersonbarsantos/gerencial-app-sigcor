

import { NgModule } from '@angular/core';

import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { CommonModule } from '@angular/common';
import { UserControllers } from './../../_helpers/controllers/user.controllers';

const routes: Routes = [
  { path: '', redirectTo: 'user-list', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-detail', component: UserDetailComponent },
];


@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
  
  CommonModule    
    , RouterModule.forChild(routes)
   
  ],
  providers: [UserService, UserControllers],
  // exports: [UserListComponent, UserDetailComponent]
})
export class UserModule {
}
