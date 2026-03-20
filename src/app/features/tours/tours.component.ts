import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../core/services/i18n.service';
import { TourService } from '../../core/services/tour.service';
import { Tour, TourCategory } from '../../models/tour.model';

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1>{{ i18n.t('tours.title') }}</h1>
        <p>Discover our amazing safari experiences</p>
      </div>
    </section>

    <!-- Tours Section -->
    <section class="section">
      <div class="container">
        <!-- Filters -->
        <div class="filters-bar">
          <div class="search-box">
            <i class="fas fa-search"></i>
            <input 
              type="text" 
              [(ngModel)]="searchTerm"
              (ngModelChange)="onSearch()"
              [placeholder]="i18n.t('tours.search')">
          </div>
          
          <div class="filter-group">
            <select [(ngModel)]="selectedCategory" (ngModelChange)="applyFilters()">
              <option value="">{{ i18n.t('tours.category') }}: {{ i18n.t('common.all') }}</option>
              @for (cat of categories; track cat.value) {
                <option [value]="cat.value">{{ cat.label }}</option>
              }
            </select>
          </div>

          <div class="filter-group">
            <select [(ngModel)]="selectedDuration" (ngModelChange)="applyFilters()">
              <option value="">{{ i18n.t('tours.duration') }}</option>
              <option value="3">1-3 {{ i18n.t('tours.days') }}</option>
              <option value="5">4-7 {{ i18n.t('tours.days') }}</option>
              <option value="10">8+ {{ i18n.t('tours.days') }}</option>
            </select>
          </div>

          <div class="filter-group">
            <select [(ngModel)]="priceRange" (ngModelChange)="applyFilters()">
              <option value="">{{ i18n.t('tours.price') }}</option>
              <option value="2000">Under $2,000</option>
              <option value="3000">Under $3,000</option>
              <option value="4000">Under $4,000</option>
              <option value="5000">Under $5,000</option>
            </select>
          </div>
        </div>

        <!-- Results Count -->
        <div class="results-info">
          <p>Showing {{ filteredTours.length }} tours</p>
        </div>

        <!-- Tours Grid -->
        <div class="tours-grid">
          @for (tour of filteredTours; track tour.id; let i = $index) {
            <div class="tour-card" [style.animation-delay]="i * 0.1 + 's'">
              <div class="tour-image">
                <img [src]="tour.images[0]" [alt]="tour.name">
                <span class="tour-badge">{{ getCategoryLabel(tour.category) }}</span>
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
                <div class="tour-features">
                  @for (highlight of tour.highlights.slice(0, 3); track highlight) {
                    <span class="feature-tag"><i class="fas fa-check"></i> {{ highlight }}</span>
                  }
                </div>
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
                <div class="tour-actions">
                  <a [routerLink]="['/tours', tour.slug]" class="btn btn-outline">
                    {{ i18n.t('tours.viewDetails') }}
                  </a>
                  <a [routerLink]="['/booking', tour.id]" class="btn btn-primary">
                    {{ i18n.t('tours.bookNow') }}
                  </a>
                </div>
              </div>
            </div>
          }
        </div>

        @if (filteredTours.length === 0) {
          <div class="no-results">
            <i class="fas fa-search"></i>
            <h3>No tours found</h3>
            <p>Try adjusting your filters to find your perfect safari</p>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      background: linear-gradient(135deg, #1A5F4A 0%, #134436 100%);
      padding: 120px 0 60px;
      color: white;
      text-align: center;

      h1 {
        font-size: 3rem;
        color: white;
        margin-bottom: 0.5rem;
      }

      p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.125rem;
      }
    }

    .filters-bar {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .search-box {
      flex: 1;
      min-width: 250px;
      position: relative;

      i {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: #718096;
      }

      input {
        width: 100%;
        padding: 0.75rem 1rem 0.75rem 2.5rem;
        border: 2px solid #E2E8F0;
        border-radius: 8px;
        font-size: 1rem;
        
        &:focus {
          outline: none;
          border-color: #1A5F4A;
        }
      }
    }

    .filter-group {
      select {
        padding: 0.75rem 2rem 0.75rem 1rem;
        border: 2px solid #E2E8F0;
        border-radius: 8px;
        font-size: 1rem;
        background: white;
        cursor: pointer;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%234A5568' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right 1rem center;

        &:focus {
          outline: none;
          border-color: #1A5F4A;
        }
      }
    }

    .results-info {
      margin-bottom: 1.5rem;
      color: #718096;
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
      animation: fadeIn 0.5s ease forwards;
      opacity: 0;

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

    .tour-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;

      .feature-tag {
        font-size: 0.75rem;
        color: #1A5F4A;
        background: rgba(26, 95, 74, 0.1);
        padding: 0.25rem 0.5rem;
        border-radius: 4px;

        i {
          margin-right: 0.25rem;
        }
      }
    }

    .tour-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #E2E8F0;
    }

    .tour-price {
      .price-old {
        font-size: 0.875rem;
        color: #A0AEC0;
        text-decoration: line-through;
        margin-right: 0.5rem;
      }

      .price-new {
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

    .tour-actions {
      display: flex;
      gap: 0.75rem;

      .btn {
        flex: 1;
        padding: 0.75rem;
        font-size: 0.875rem;
      }
    }

    .no-results {
      text-align: center;
      padding: 4rem 2rem;
      color: #718096;

      i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: #CBD5E1;
      }

      h3 {
        margin-bottom: 0.5rem;
        color: #4A5568;
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 1024px) {
      .tours-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 640px) {
      .tours-grid {
        grid-template-columns: 1fr;
      }

      .filters-bar {
        flex-direction: column;
      }

      .search-box {
        min-width: 100%;
      }
    }
  `]
})
export class ToursComponent implements OnInit {
  tours: Tour[] = [];
  filteredTours: Tour[] = [];
  searchTerm = '';
  selectedCategory = '';
  selectedDuration = '';
  priceRange = '';
  categories: { value: TourCategory; label: string }[] = [];

  constructor(
    public i18n: I18nService,
    private tourService: TourService
  ) {}

  ngOnInit(): void {
    this.categories = this.tourService.getCategories();
    this.loadTours();
  }

  loadTours(): void {
    this.tourService.getTours().subscribe(tours => {
      this.tours = tours;
      this.filteredTours = tours;
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  applyFilters(): void {
    let result = [...this.tours];

    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(t => 
        t.name.toLowerCase().includes(term) ||
        t.description.toLowerCase().includes(term) ||
        t.destination.toLowerCase().includes(term)
      );
    }

    if (this.selectedCategory) {
      result = result.filter(t => t.category === this.selectedCategory);
    }

    if (this.selectedDuration) {
      const maxDuration = parseInt(this.selectedDuration);
      result = result.filter(t => t.duration <= maxDuration);
    }

    if (this.priceRange) {
      const maxPrice = parseInt(this.priceRange);
      result = result.filter(t => (t.discountPrice || t.price) <= maxPrice);
    }

    this.filteredTours = result;
  }

  getCategoryLabel(category: TourCategory): string {
    const cat = this.categories.find(c => c.value === category);
    return cat ? cat.label : category;
  }
}
