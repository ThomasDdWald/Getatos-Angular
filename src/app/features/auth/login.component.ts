import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [RouterModule, FormsModule]
})
export class LoginComponent {
  email = ''; password = ''; isLoading = false;
  constructor(private authService: AuthService, private router: Router, public i18n: I18nService) {}
  onLogin(): void { this.isLoading = true; this.authService.login(this.email, this.password).subscribe(user => { this.isLoading = false; if (user) { this.authService.authenticate(user); this.redirectByRole(user.role); } }); }
  loginAsAdmin(): void { this.authService.loginAsAdmin(); this.redirectByRole('ADMIN'); }
  loginAsStaff(): void { this.authService.loginAsStaff(); this.redirectByRole('STAFF'); }
  loginAsAgency(): void { this.authService.loginAsAgency(); this.redirectByRole('AGENCY'); }
  loginAsCustomer(): void { this.authService.loginAsCustomer(); this.redirectByRole('CUSTOMER'); }
  private redirectByRole(role: string): void { if (role === 'ADMIN' || role === 'STAFF') this.router.navigate(['/backoffice']); else if (role === 'AGENCY') this.router.navigate(['/agency']); else this.router.navigate(['/dashboard']); }
}
