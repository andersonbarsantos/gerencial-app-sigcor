import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from '../user.service';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/shared/models/user.model';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private router: Router
    , private userService: UserService   
    ) {

     }

  ngOnInit() {
    // if(!window.localStorage.getItem('token')) {
    //   this.router.navigate(['login']);
    //   return;
    // }
  //   this.userService.getUsers()
  //     .subscribe(data => {
  //       this.users = data.result;
  //     });

  this.listUser() ; 
   }

  listUser() : void  {
    this.users = this.userService.getUsers();     
  }


  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
