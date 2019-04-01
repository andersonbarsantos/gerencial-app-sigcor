import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';

import { BsDropdownModule } from 'ngx-bootstrap';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
}

@NgModule({

    imports: [

        CommonModule
        , BrowserAnimationsModule
        , BsDropdownModule.forRoot()
        , PerfectScrollbarModule
        , RouterModule
    ],
    declarations: [
        SidebarComponent
    ],
    exports: [
        SidebarComponent
        , RouterModule
    ],
    providers: [
        SidebarService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,

        }],


})
export class SidebarModule { }
