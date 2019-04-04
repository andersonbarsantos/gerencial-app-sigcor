<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';

=======

import { Component, OnInit, ViewChild } from '@angular/core';
>>>>>>> module

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {


  rows = [];

  temp = [];

  columns = [
    { prop: 'name' },
    { name: 'Company' },
    { name: 'Gender' }
  ];
  // @ViewChild(DatatableComponent) table: DatatableComponent;


  constructor() {
  }

  ngOnInit() {
  }

}
