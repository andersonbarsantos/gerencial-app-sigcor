import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from './interfaces/user';
import { AuthenticationService } from './auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gerencial SigCor';
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

