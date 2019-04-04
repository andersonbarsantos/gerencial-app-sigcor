import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent implements OnInit {
  @Input() breadcrumb: string[];
  @Input() icon: string;

  constructor() {
      
  }

  ngOnInit() {}
}
