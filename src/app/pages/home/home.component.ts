import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/shared/components/sidebar/sidebar.service';
import { first } from 'rxjs/operators';

import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  title = "Sistema de Analise de Dados" ; 

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
