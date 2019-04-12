import { Injectable } from '@angular/core';

import { User } from 'src/app/shared/models/user.model';
import { UserControllers } from 'src/app/_helpers/controllers/user.controllers';

@Injectable()
export class UserService {

  constructor(public userControllers: UserControllers) { }

  users: User[];

  getUsers()  {
    // this.userControllers.getUsers().subscribe(data => {
    //   this.users =  data.result;
    //   return this.users ; 
    // });    


    return this.userControllers.getUser();
  }

  getUserById(id: number) {
    return this.userControllers.getUserById(id);
  }

  createUser(user: User) {
    return this.userControllers.createUser(user);
  }

  updateUser(user: User) {
    return this.userControllers.updateUser(user);
  }

  deleteUser(id: number) {
    return this.userControllers.deleteUser(id);
  }
}
