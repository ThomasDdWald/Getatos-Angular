import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../core/services/i18n.service';
import { TourService } from '../../core/services/tour.service';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <span class="hero-badge animate-fade-in">Tanzania Safari Experts</span>
          <h1 class="animate-fade-in">{{ i18n.t('home.hero.title') }}</h1>
          <p class="hero-subtitle animate-fade-in">{{ i18n.t('home.hero.subtitle') }}</p>
          <div class="hero-actions animate-fade-in">
            <a routerLink="/tours" class="btn btn-accent btn-lg">
              {{ i18n.t('home.hero.cta') }}
              <i class="fas fa-arrow-right"></i>
            </a>
            <a href="#featured" class="btn btn-outline btn-lg">
              View Featured
            </a>
          </div>
        </div>
        
        <!-- Stats -->
        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">15+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat">
            <span class="stat-number">10K+</span>
            <span class="stat-label">Happy Travelers</span>
          </div>
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Safari Tours</span>
          </div>
          <div class="stat">
            <span class="stat-number">98%</span>
            <span class="stat-label">Satisfaction</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Tours -->
    <section id="featured" class="section featured-section">
      <div class="container">
        <div class="section-title">
          <span class="section-subtitle">{{ i18n.t('home.featured.subtitle') }}</span>
          <h2>{{ i18n.t('home.featured.title') }}</h2>
        </div>

        <div class="tours-grid">
          @for (tour of featuredTours; track tour.id) {
            <div class="tour-card">
              <div class="tour-image">
                <img [src]="tour.images[0]" [alt]="tour.name">
                <span class="tour-badge">{{ tour.category }}</span>
                @if (tour.discountPrice) {
                  <span class="tour-discount">SAVE \${{ tour.price - tour.discountPrice }}</span>
                }
              </div>
              <div class="tour-content">
                <div class="tour-meta">
                  <span><i class="fas fa-map-marker-alt"></i> {{ tour.destination }}</span>
                  <span><i class="fas fa-clock"></i> {{ tour.duration }} {{ i18n.t('tours.days') }}</span>
                </div>
                <h3>{{ tour.name }}</h3>
                <p>{{ tour.shortDescription }}</p>
                <div class="tour-footer">
                  <div class="tour-price">
                    @if (tour.discountPrice) {
                      <span class="price-old">\${{ tour.price }}</span>
                      <span class="price-new">\${{ tour.discountPrice }}</span>
                    } @else {
                      <span class="price-new">\${{ tour.price }}</span>
                    }
                    <span class="price-per">{{ i18n.t('tours.perPerson') }}</span>
                  </div>
                  <div class="tour-rating">
                    <i class="fas fa-star"></i>
                    <span>{{ tour.rating }}</span>
                    <span class="reviews">({{ tour.reviewCount }})</span>
                  </div>
                </div>
                <a [routerLink]="['/tours', tour.slug]" class="btn btn-primary">
                  {{ i18n.t('tours.viewDetails') }}
                </a>
              </div>
            </div>
          }
        </div>

        <div class="section-cta">
          <a routerLink="/tours" class="btn btn-secondary btn-lg">
            View All Tours
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section why-section">
      <div class="container">
        <div class="section-title">
          <span class="section-subtitle">{{ i18n.t('home.why.subtitle') }}</span>
          <h2>{{ i18n.t('home.why.title') }}</h2>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-globe-africa"></i>
            </div>
            <h3>Local Experts</h3>
            <p>Our team consists of Tanzanian-born guides with deep knowledge of local wildlife and culture.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-shield-alt"></i>
            </div>
            <h3>Safety First</h3>
            <p>Your safety is our priority. We maintain the highest safety standards and insurance coverage.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <h3>Best Value</h3>
            <p>Competitive pricing with no hidden fees. We offer transparent pricing and flexible payment options.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-heart"></i>
            </div>
            <h3>Personalized Service</h3>
            <p>Every trip is customized to your preferences. We listen and create your perfect safari experience.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>{{ i18n.t('home.cta.title') }}</h2>
          <p>{{ i18n.t('home.cta.subtitle') }}</p>
          <div class="cta-actions">
            <a routerLink="/tours" class="btn btn-accent btn-lg">
              {{ i18n.t('home.cta.button') }}
            </a>
            <a routerLink="/contact" class="btn btn-outline btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Hero Section */
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 80px;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      background: url('https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920') center/cover;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(26, 95, 74, 0.9) 0%, rgba(26, 95, 74, 0.7) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      color: white;
    }

    .hero-badge {
      display: inline-block;
      background: rgba(212, 168, 83, 0.2);
      color: #D4A853;
      padding: 0.5rem 1.5rem;
      border-radius: 50px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1.5rem;
    }

    .hero h1 {
      font-size: 4rem;
      color: white;
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.25rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2.5rem;
      max-width: 600px;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;

      .btn-outline {
        border-color: white;
        color: white;

        &:hover {
          background: white;
          color: #1A5F4A;
        }
      }
    }

    .hero-stats {
      position: relative;
      z-index: 1;
      display: flex;
      gap: 3rem;
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.2);

      .stat {
        text-align: center;
      }

      .stat-number {
        display: block;
        font-family: 'Playfair Display', serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: #D4A853;
      }

      .stat-label {
        font-size: 0.875rem;
        color: rgba(255, 255, 255, 0.8);
      }
    }

    /* Featured Section */
    .featured-section {
      background: #FAF8F5;
    }

    .tours-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .tour-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);

        .tour-image img {
          transform: scale(1.05);
        }
      }
    }

    .tour-image {
      position: relative;
      height: 220px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      .tour-badge {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: #1A5F4A;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 50px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
      }

      .tour-discount {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: #E85D04;
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 50px;
        font-size: 0.75rem;
        font-weight: 600;
      }
    }

    .tour-content {
      padding: 1.5rem;
    }

    .tour-meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
      color: #718096;

      span {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      i {
        color: #D4A853;
      }
    }

    .tour-content h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .tour-content p {
      font-size: 0.9rem;
      color: #718096;
      margin-bottom: 1rem;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .tour-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .tour-price {
      .price-old {
        font-size: 0.875rem;
        color: #A0AEC0;
        text-decoration: line-through;
        margin-right: 0.5rem;
      }

      P3 .price-new {
        font-size: 1.5rem;
        font-weight: 700;
        color: #1A5F4A;
      }

      .price-per {
        display: block;
        font-size: 0.75rem;
        color: #718096;
      }
    }

    .tour-rating {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.875rem;

      i {
        color: #D4A853;
      }

      .reviews {
        color: #718096;
      }
    }

    .section-cta {
      text-align: center;
      margin-top: 3rem;
    }

    /* Why Section */
    .why-section {
      background: white;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
      border-radius: 16px;
      background: #FAF8F5;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-5px);
      }
    }

    .feature-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #1A5F4A 0%, #2A7D62 100%);
      border-radius: 50%;

      i {
        font-size: 2rem;
        color: #D4A853;
      }
    }

    .feature-card h3 {
      margin-bottom: 0.75rem;
    }

    .feature-card p {
      font-size: 0.9rem;
      margin: 0;
    }

    /* CTA Section */
    .cta-section {
      background: linear-gradient(135deg, #1A5F4A 0%, #134436 100%);
      color: white;
      text-align: center;
    }

    .cta-content {
      max-width: 600px;
      margin: 0 auto;
    }

    .cta-content h2 {
      color: white;
      margin-bottom: 1rem;
    }

    .cta-content p {
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.125rem;
      margin-bottom: 2rem;
    }

    .cta-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;

      .btn-outline {
        border-color: white;
        color: white;

        &:hover {
          background: white;
          color: #1A5F4A;
        }
      }
    }

    @media (max-width: 1024px) {
      .hero h1 {
        font-size: 3rem;
      }

      .tours-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .features-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .hero h1 {
        font-size: 2.25rem;
      }

      .hero-stats {
        flex-wrap: wrap;
        gap: 2rem;
      }

      .tours-grid,
      .features-grid {
        grid-template-columns: 1fr;
      }

      .cta-actions {
        flex-direction: column;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredTours: Tour[] = [];

  constructor(
    public i18n: I18nService,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.tourService.getFeaturedTours().subscribe(tours => {
      this.featuredTours = tours;
    });
  }
}
