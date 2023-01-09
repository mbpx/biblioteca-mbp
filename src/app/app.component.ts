import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'biblioteca-mbpx';
  displaySidebar: boolean = false;
  showHead: boolean = false;

  constructor(
    private router: Router,
    public auth: AuthService
  ) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'].startsWith('/login')) {
          this.showHead = false;
        } else {
          // console.log("NU")
          this.showHead = true;
        }
      }
    });
  }

  ngOnInit(): void {
  }

  changeDisplaySidebar() {
    this.displaySidebar = !this.displaySidebar;
  }
}
