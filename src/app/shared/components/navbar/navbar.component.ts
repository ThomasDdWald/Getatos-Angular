import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nService, Language, LanguageConfig, SUPPORTED_LANGUAGES } from '../../../core/services/i18n.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule]
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
