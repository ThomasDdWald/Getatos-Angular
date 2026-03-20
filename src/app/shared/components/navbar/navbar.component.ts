import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  showLangMenu = false;
  showMobileMenu = false;
  isAuthenticated = false;
  currentUser: any = null;
  languages = [
    { code: 'en', flag: 'EN', name: 'English' },
    { code: 'de', flag: 'DE', name: 'Deutsch' },
    { code: 'es', flag: 'ES', name: 'Español' },
    { code: 'fr', flag: 'FR', name: 'Français' },
    { code: 'zh', flag: 'ZH', name: '中文' }
  ];
  currentLang: any = this.languages[0];

  constructor() {}

  ngOnInit(): void {}

  toggleLangMenu(): void { this.showLangMenu = !this.showLangMenu; }
  toggleMobileMenu(): void { this.showMobileMenu = !this.showMobileMenu; }
  closeMobileMenu(): void { this.showMobileMenu = false; }
  setLanguage(lang: any): void { this.currentLang = lang; this.showLangMenu = false; }
  logout(): void {}
}
