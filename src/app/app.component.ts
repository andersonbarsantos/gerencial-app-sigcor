import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { AuthenticationService } from './auth/authentication.service';
import { Router } from '@angular/router';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',

})
export class AppComponent {
  title = 'Gerencial SiGCOR';
  currentUser: User;

  constructor(
    private translate: TranslateService
    , private router: Router
    , private authenticationService: AuthenticationService
  ) {
    translate.addLangs(['en', 'br', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|br|fr/) ? browserLang : 'br');
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

