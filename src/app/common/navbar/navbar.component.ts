import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  tabs = [];
  routerStateUrl = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((val) => {
        console.log(val);

        /* If navigation has ended */
        if (val instanceof NavigationEnd) {

          /* Reset tabs */
          this.tabs = [];

          /* Hide navbar if current route equals '/login' or '/register' */
          for (let i = 0; i < this.router.config.length; i++) {
            if (this.router.config[i].data.includeInNavbar === true) {
              if (this.router.config[i].data.title === '') {
                // TODO: Set tabtitle dynamically based on registered home
                this.router.config[i].data.title = 'Warande 57';
              }
              this.tabs.push(this.router.config[i]);
            }
          }
        }
    });
  }
}
