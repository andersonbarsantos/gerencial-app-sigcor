import { Injectable } from '@angular/core';

import { User } from 'src/app/models/user.model';
import { Usercontrollers } from 'src/app/_helpers/controllers/user.controllers';

@Injectable()
export class UserService {

  constructor(private userControllers: Usercontrollers) { }

  getUsers()  {
    return  this.userControllers.getUsers();
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
