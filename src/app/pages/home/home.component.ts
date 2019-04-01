import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/sidebar/sidebar.service';
import { first } from 'rxjs/operators';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[] = [];

  constructor(public sidebarservice: SidebarService) { }
  toggleSidebar() {
    this.sidebarservice.setSidebarState(!this.sidebarservice.getSidebarState());
  }

    ngOnInit() {
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //     this.users = users;
        // });
    }

    toggleBackgroundImage() {
      this.sidebarservice.hasBackgroundImage = !this.sidebarservice.hasBackgroundImage;
    }
    getSideBarState() {
      return this.sidebarservice.getSidebarState();
    }
  
    hideSidebar() {
      this.sidebarservice.setSidebarState(true);
    }
  

}
