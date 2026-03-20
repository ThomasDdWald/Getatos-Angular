import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService, Language, LanguageConfig, SUPPORTED_LANGUAGES } from '../../../core/services/i18n.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="container">
        <div class="navbar-content">
          <!-- Logo -->
          <a routerLink="/" class="logo">
            <img src="https://getatos-safari.com/wp-content/uploads/2025/01/Safari-logo-with-out-bg.png" 
                 alt="Getatos Safari" 
                 class="logo-img">
          </a>

          <!-- Desktop Navigation -->
          <div class="nav-links">
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
              {{ i18n.t('nav.home') }}
            </a>
            <a routerLink="/tours" routerLinkActive="active">
              {{ i18n.t('nav.tours') }}
            </a>
            <a routerLink="/about" routerLinkActive="active">
              {{ i18n.t('nav.about') }}
            </a>
            <a routerLink="/contact" routerLinkActive="active">
              {{ i18n.t('nav.contact') }}
            </a>
            
            <!-- Auth Links -->
            @if (!isAuthenticated) {
              <a routerLink="/login" class="nav-cta">
                {{ i18n.t('nav.login') }}
              </a>
            } @else {
              @if (currentUser?.role === 'ADMIN' || currentUser?.role === 'STAFF') {
                <a routerLink="/backoffice" routerLinkActive="active">
                  {{ i18n.t('nav.backoffice') }}
                </a>
              }
              @if (currentUser?.role === 'AGENCY') {
                <a routerLink="/agency" routerLinkActive="active">
                  {{ i18n.t('nav.agency') }}
                </a>
              }
              <a routerLink="/dashboard" routerLinkActive="active">
                {{ i18n.t('nav.dashboard') }}
              </a>
              <button (click)="logout()" class="btn-logout">
                {{ i18n.t('nav.logout') }}
              </button>
            }
          </div>

          <!-- Language Switcher -->
          <div class="language-switcher">
            <button class="lang-btn" (click)="toggleLangMenu()">
              <span class="current-lang">{{ currentLang.flag }}</span>
              <i class="fas fa-chevron-down"></i>
            </button>
            @if (showLangMenu) {
              <div class="lang-dropdown">
                @for (lang of languages; track lang.code) {
                  <button 
                    class="lang-option" 
                    [class.active]="lang.code === currentLang.code"
                    (click)="setLanguage(lang.code)">
                    <span class="lang-flag">{{ lang.flag }}</span>
                    <span class="lang-name">{{ lang.nativeName }}</span>
                  </button>
                }
              </div>
            }
          </div>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
            <i class="fas" [class.fa-bars]="!showMobileMenu" [class.fa-times]="showMobileMenu"></i>
          </button>
        </div>

        <!-- Mobile Navigation -->
        @if (showMobileMenu) {
          <div class="mobile-nav">
            <a routerLink="/" (click)="closeMobileMenu()">
              {{ i18n.t('nav.home') }}
            </a>
            <a routerLink="/tours" (click)="closeMobileMenu()">
              {{ i18n.t('nav.tours') }}
            </a>
            <a routerLink="/about" (click)="closeMobileMenu()">
              {{ i18n.t('nav.about') }}
            </a>
            <a routerLink="/contact" (click)="closeMobileMenu()">
              {{ i18n.t('nav.contact') }}
            </a>
            @if (!isAuthenticated) {
              <a routerLink="/login" (click)="closeMobileMenu()">
                {{ i18n.t('nav.login') }}
              </a>
            } @else {
              <a routerLink="/dashboard" (click)="closeMobileMenu()">
                {{ i18n.t('nav.dashboard') }}
              </a>
              @if (currentUser?.role === 'ADMIN' || currentUser?.role === 'STAFF') {
                <a routerLink="/backoffice" (click)="closeMobileMenu()">
                  {{ i18n.t('nav.backoffice') }}
                </a>
              }
              <button (click)="logout(); closeMobileMenu()">
                {{ i18n.t('nav.logout') }}
              </button>
            }
          </div>
        }
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      
      &.scrolled {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }
    }

    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;
    }

    .logo {
      display: flex;
      align-items: center;
      
      .logo-img {
        height: 50px;
        width: auto;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;

      a {
        font-weight: 500;
        color: #2D3436;
        transition: color 0.2s ease;
        
        &:hover, &.active {
          color: #1A5F4A;
        }
      }

      .nav-cta {
        background: #1A5F4A;
        color: white !important;
        padding: 0.5rem 1.5rem;
        border-radius: 8px;
        
        &:hover {
          background: #134436;
        }
      }

      .btn-logout {
        background: none;
        border: none;
        font-weight: 500;
        color: #E85D04;
        cursor: pointer;
        padding: 0.5rem 1rem;
        
        &:hover {
          color: #C44E03;
        }
      }
    }

    .language-switcher {
      position: relative;
    }

    .lang-btn {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background: none;
      border: 2px solid #E2E8F0;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        border-color: #1A5F4A;
      }

      .current-lang {
        font-size: 1.25rem;
      }

      i {
        font-size: 0.75rem;
        color: #4A5568;
      }
    }

    .lang-dropdown {
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      min-width: 180px;
      animation: fadeIn 0.2s ease;
    }

    .lang-option {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: 100%;
      padding: 0.75rem 1rem;
      background: none;
      border: none;
      cursor: pointer;
      transition: background 0.2s ease;
      text-align: left;
      
      &:hover {
        background: #F5F5F0;
      }

      &.active {
        background: rgba(26, 95, 74, 0.1);
        color: #1A5F4A;
      }

      .lang-flag {
        font-size: 1.25rem;
      }

      .lang-name {
        font-weight: 500;
      }
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      font-size: 1.5rem;
      color: #2D3436;
      cursor: pointer;
    }

    .mobile-nav {
      display: none;
      flex-direction: column;
      padding: 1rem 0;
      border-top: 1px solid #E2E8F0;
      
      a, button {
        display: block;
        padding: 0.75rem 0;
        font-weight: 500;
        color: #2D3436;
        text-decoration: none;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        
        &:hover {
          color: #1A5F4A;
        }
      }
    }

    @media (max-width: 1024px) {
      .nav-links {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
      }

      .mobile-nav {
        display: flex;
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  showLangMenu = false;
  showMobileMenu = false;
  isAuthenticated = false;
  currentUser: any = null;
  
  languages = SUPPORTED_LANGUAGES;
  currentLang: LanguageConfig = SUPPORTED_LANGUAGES[0];

  constructor(
    public i18n: I18nService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.authState$.subscribe(state => {
      this.isAuthenticated = state.isAuthenticated;
      this.currentUser = state.user;
    });

    this.i18n.currentLanguage$.subscribe(lang => {
      this.currentLang = this.languages.find(l => l.code === lang) || this.languages[0];
    });

    window.addEventListener('scroll', () => {
      this.isScrolled = window.scrollY > 50;
    });
  }

  toggleLangMenu(): void {
    this.showLangMenu = !this.showLangMenu;
  }

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }

  closeMobileMenu(): void {
    this.showMobileMenu = false;
  }

  setLanguage(lang: Language): void {
    this.i18n.setLanguage(lang);
    this.showLangMenu = false;
  }

  logout(): void {
    this.authService.logout();
  }
}
