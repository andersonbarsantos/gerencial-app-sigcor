import { Injectable } from '@angular/core';
// import { AppConfigService } from './../../app-config.service'
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Routes, RouterModule, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  [x: string]: any;
  toggled = false;
  _hasBackgroundImage = true;

  menus = [
    {
      title: 'Principal',
      type: 'header'
    },
    {
      title: 'Dados Basicos',
      icon: 'fa fa-shopping-cart',
      active: false,
      type: 'dropdown',   
      path: "",    
      submenus: [
        {
          title: 'Usuario',
          path:"/user"
        },
        {
          title: 'Funcionarios',
          path:"/funcionarios"
        },
        {
          title: 'Ramos',
          path : 'ramos'
        },
        {
          title: 'Seguradoras',
          path : '/seguradoras'
        }
      ]
    },
    {
      title: 'Dashboard',
      icon: 'fa fa-tachometer-alt',
      active: false,
      type: 'simple',
      path: "/dashboard",

      // submenus: [
      //   {
      //     title: 'Dashboard 1',
      //     badge: {
      //       text: 'Pro ',
      //       class: 'badge-success'
      //     }
      //   },
      //   {
      //     title: 'Dashboard 2'
      //   },
      //   {
      //     title: 'Dashboard 3'
      //   }
      // ]
    },
    {
      title: 'Cliente',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      path: "/cliente",

    },
    {
      title: 'Contratos',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      path: "/contratos",

    },
    {
      title: 'Financeiro',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      path: "/financeiro",

    },

    // {
    //   title: 'Financeiro',
    //   icon: 'far fa-gem',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'General',
    //     },
    //     {
    //       title: 'Panels'
    //     },
    //     {
    //       title: 'Tables'
    //     },
    //     {
    //       title: 'Icons'
    //     },
    //     {
    //       title: 'Forms'
    //     }
    //   ]
    // },
    // {
    //   title: 'Charts',
    //   icon: 'fa fa-chart-line',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'Pie chart',
    //     },
    //     {
    //       title: 'Line chart'
    //     },
    //     {
    //       title: 'Bar chart'
    //     },
    //     {
    //       title: 'Histogram'
    //     }
    //   ]
    // },
    // {
    //   title: 'Maps',
    //   icon: 'fa fa-globe',
    //   active: false,
    //   type: 'dropdown',
    //   submenus: [
    //     {
    //       title: 'Google maps',
    //     },
    //     {
    //       title: 'Open street map'
    //     }
    //   ]
    // },
    // {
    //   title: 'Extra',
    //   type: 'header'
    // },
    // {
    //   title: 'Documentation',
    //   icon: 'fa fa-book',
    //   active: false,
    //   type: 'simple',
    //   badge: {
    //     text: 'Beta',
    //     class: 'badge-primary'
    //   },
    // },
    // {
    //   title: 'Calendar',
    //   icon: 'fa fa-calendar',
    //   active: false,
    //   type: 'simple'
    // },
    // {
    //   title: 'Sobre',
    //   icon: 'fa fa-folder',
    //   active: false,
    //   type: 'simple'
    // }
  ];

  constructor(
    //private configuracao: AppConfigService,
    private route : Router,
    private authenticationService: AuthenticationService) {


  }

  toggle() {
    this.toggled = !this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus; // this.configuracao.getMenuSideBar();
  }

  getConfig() {
   // return this.configuracao.getConfig();
  }


  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }

  logout() {
    this.authenticationService.logout();
    this.route.navigate(['/login']);
  }
}
