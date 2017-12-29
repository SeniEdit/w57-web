import { Component } from '@angular/core';
import { Router }    from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login';

  constructor(private router: Router) { }

  onLogin(email, password, code) {
    console.log(`${email} ${password} ${code}`);
    this.router.navigate(['/dashboard'])
  }
}
