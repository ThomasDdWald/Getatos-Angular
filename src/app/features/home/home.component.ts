import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../core/services/i18n.service';
import { TourService } from '../../core/services/tour.service';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule],
  standalone: false
})
export class HomeComponent implements OnInit {
  featuredTours: Tour[] = [];
  
  heroTitle = '';
  heroSubtitle = '';
  heroCta = '';
  featuredTitle = '';
  featuredSubtitle = '';
  whyTitle = '';
  whySubtitle = '';
  ctaTitle = '';
  ctaSubtitle = '';
  ctaButton = '';
  daysLabel = '';
  perPersonLabel = '';
  viewDetailsLabel = '';

  constructor(
    private i18n: I18nService,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.updateTranslations();
    this.i18n.currentLanguage$.subscribe(() => {
      this.updateTranslations();
    });
    
    this.tourService.getFeaturedTours().subscribe(tours => {
      this.featuredTours = tours;
    });
  }

  private updateTranslations(): void {
    this.heroTitle = this.i18n.t('home.hero.title');
    this.heroSubtitle = this.i18n.t('home.hero.subtitle');
    this.heroCta = this.i18n.t('home.hero.cta');
    this.featuredTitle = this.i18n.t('home.featured.title');
    this.featuredSubtitle = this.i18n.t('home.featured.subtitle');
    this.whyTitle = this.i18n.t('home.why.title');
    this.whySubtitle = this.i18n.t('home.why.subtitle');
    this.ctaTitle = this.i18n.t('home.cta.title');
    this.ctaSubtitle = this.i18n.t('home.cta.subtitle');
    this.ctaButton = this.i18n.t('home.cta.button');
    this.daysLabel = this.i18n.t('tours.days');
    this.perPersonLabel = this.i18n.t('tours.perPerson');
    this.viewDetailsLabel = this.i18n.t('tours.viewDetails');
  }
}
