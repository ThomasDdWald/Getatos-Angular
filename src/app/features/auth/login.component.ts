import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  isLoading = false;
  constructor() {}
  onLogin(): void {}
  loginAsAdmin(): void {}
  loginAsStaff(): void {}
  loginAsAgency(): void {}
  loginAsCustomer(): void {}
}
