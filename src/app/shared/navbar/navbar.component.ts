// import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
// import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


// declare var $:any;

// export interface RouteInfo {
//     path: string;
//     title: string;
//     icon: string;
//     class: string;
// }

// export const ROUTES: RouteInfo[] = [
//   { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
//   { path: 'user', title: 'User Profile',  icon:'ti-user', class: '' },
//   { path: 'table', title: 'Table List',  icon:'ti-view-list-alt', class: '' },
//   { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
//   { path: 'icons', title: 'Icons',  icon:'ti-pencil-alt2', class: '' },
//   { path: 'maps', title: 'Maps',  icon:'ti-map', class: '' },
//   { path: 'notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
//   { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
// ];


// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.scss']
// })

// export class NavbarComponent implements OnInit{
 
//   constructor() { }

//   ngOnInit() {
//   }
// }


import { Component, OnInit } from '@angular/core';


export enum MenuType {
  BRAND,
  LEFT,
  RIGHT
}

export interface RouteInfo {
  path: string;
  title: string;
  menuType: MenuType;
}

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'Angular2 Bootstrap4 Navbar', menuType: MenuType.BRAND },
  { path: 'heroes', title: 'Heroes', menuType: MenuType.LEFT },
  { path: 'about', title: 'About Us', menuType: MenuType.RIGHT },
  { path: 'contact', title: 'Contact', menuType: MenuType.RIGHT }
];

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: [ 'navbar.component.scss' ]
})

export class NavbarComponent implements OnInit {
  public menuItems: any[];
  public brandMenu: any;
  isCollapsed = true;


  
  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND);
    this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
  }

  public get menuIcon(): string {
    return this.isCollapsed ? '☰' : '✖';
  }

  public getMenuItemClasses(menuItem: any) {
    return {
      'pull-xs-right': this.isCollapsed && menuItem.menuType === MenuType.RIGHT
    };
  }
}