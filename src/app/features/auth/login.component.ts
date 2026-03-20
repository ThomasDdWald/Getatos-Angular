import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { I18nService } from '../../core/services/i18n.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="login-page">
      <div class="login-container">
        <div class="login-header">
          <img src="https://getatos-safari.com/wp-content/uploads/2025/01/Safari-logo-with-out-bg.png" 
               alt="Getatos Safari">
          <h2>Welcome Back</h2>
          <p>Sign in to access your account</p>
        </div>

        <form (ngSubmit)="onLogin()" class="login-form">
          <div class="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              [(ngModel)]="email" 
              name="email"
              placeholder="Enter your email"
              required>
          </div>

          <div class="form-group">
            <label>Password</label>
            <input 
              type="password" 
              [(ngModel)]="password" 
              name="password"
              placeholder="Enter your password"
              required>
          </div>

          <div class="form-options">
            <label class="checkbox">
              <input type="checkbox">
              <span>Remember me</span>
            </label>
            <a href="#" class="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" [disabled]="isLoading">
            @if (isLoading) {
              <i class="fas fa-spinner fa-spin"></i> Signing in...
            } @else {
              Sign In
            }
          </button>
        </form>

        <div class="demo-accounts">
          <p>Demo Accounts (click to login):</p>
          <div class="demo-buttons">
            <button (click)="loginAsAdmin()" class="demo-btn admin">
              <i class="fas fa-user-shield"></i> Admin
            </button>
            <button (click)="loginAsStaff()" class="demo-btn staff">
              <i class="fas fa-user-tie"></i> Staff
            </button>
            <button (click)="loginAsAgency()" class="demo-btn agency">
              <i class="fas fa-handshake"></i> Agency
            </button>
            <button (click)="loginAsCustomer()" class="demo-btn customer">
              <i class="fas fa-user"></i> Customer
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .login-page {
      min-height: calc(100vh - 80px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background: linear-gradient(135deg, #1A5F4A 0%, #134436 100%);
    }

    .login-container {
      background: white;
      border-radius: 20px;
      padding: 3rem;
      width: 100%;
      max-width: 450px;
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
    }

    .login-header {
      text-align: center;
      margin-bottom: 2rem;

      img {
        height: 60px;
        margin-bottom: 1.5rem;
      }

      h2 {
        margin: 0 0 0.5rem;
        font-size: 1.75rem;
      }

      p {
        color: #718096;
        margin: 0;
      }
    }

    .login-form {
      .form-group {
        margin-bottom: 1.5rem;

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #2D3436;
        }

        input {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #E2E8F0;
          border-radius: 10px;
          font-size: 1rem;
          transition: border-color 0.2s ease;

          &:focus {
            outline: none;
            border-color: #1A5F4A;
          }
        }
      }
    }

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;

      .checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;

        input {
          width: 18px;
          height: 18px;
          accent-color: #1A5F4A;
        }

        span {
          font-size: 0.9rem;
          color: #4A5568;
        }
      }

      .forgot-link {
        font-size: 0.9rem;
        color: #1A5F4A;
        font-weight: 500;
      }
    }

    .login-form .btn {
      width: 100%;
    }

    .demo-accounts {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #E2E8F0;
      text-align: center;

      p {
        font-size: 0.875rem;
        color: #718096;
        margin-bottom: 1rem;
      }
    }

    .demo-buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }

    .demo-btn {
      padding: 0.5rem;
      border: 2px solid #E2E8F0;
      border-radius: 8px;
      background: white;
      font-size: 0.8rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        border-color: #1A5F4A;
        background: rgba(26, 95, 74, 0.05);
      }

      &.admin { color: #7C3AED; }
      &.staff { color: #2563EB; }
      &.agency { color: #059669; }
      &.customer { color: #D4A853; }
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    public i18n: I18nService
  ) {}

  onLogin(): void {
    this.isLoading = true;
    this.authService.login(this.email, this.password).subscribe(user => {
      this.isLoading = false;
      if (user) {
        this.authService.authenticate(user);
        this.redirectByRole(user.role);
      }
    });
  }

  loginAsAdmin(): void {
    this.authService.loginAsAdmin();
    this.redirectByRole('ADMIN');
  }

  loginAsStaff(): void {
    this.authService.loginAsStaff();
    this.redirectByRole('STAFF');
  }

  loginAsAgency(): void {
    this.authService.loginAsAgency();
    this.redirectByRole('AGENCY');
  }

  loginAsCustomer(): void {
    this.authService.loginAsCustomer();
    this.redirectByRole('CUSTOMER');
  }

  private redirectByRole(role: string): void {
    switch (role) {
      case 'ADMIN':
      case 'STAFF':
        this.router.navigate(['/backoffice']);
        break;
      case 'AGENCY':
        this.router.navigate(['/agency']);
        break;
      default:
        this.router.navigate(['/dashboard']);
    }
  }
}
