import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../core/services/i18n.service';
import { TourService } from '../../core/services/tour.service';
import { Tour, TourCategory } from '../../models/tour.model';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
  imports: [RouterModule, FormsModule]
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
      result = result.filter(t => t.name.toLowerCase().includes(term) || t.destination.toLowerCase().includes(term));
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
