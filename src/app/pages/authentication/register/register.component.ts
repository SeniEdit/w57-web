import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Registreren';

  constructor(private router: Router) { }

  onRegister(firstName, lastName, email, password, code) {
    console.log(firstName, lastName, email, password, code);
    this.router.navigate(['/login']);
  }
}
