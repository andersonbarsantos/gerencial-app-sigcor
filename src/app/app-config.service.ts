import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  menu : any[]=[];

  constructor() {
    this.fetch((data) => {
      console.log(data);
      this.menu = data.splice(0, 5);
    });


  }

  private fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/menu.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  getMenuSideBar() {
    return this.menu;
  }

  getConfig() {
    const config =
    {
      appNome: 'SigCor',
      nome: 'Anderson',
      sobrenome: "Barreto",
      cargo: 'Administrador'
    }
    return config;
  }

}
