import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  tours: Tour[] = [];
  filteredTours: Tour[] = [];
  searchTerm = '';
  selectedCategory = '';
  selectedDuration = '';
  priceRange = '';
  categories: { value: string; label: string }[] = [];

  constructor() {}

  ngOnInit(): void {}

  loadTours(): void {}
  onSearch(): void {}
  applyFilters(): void {}
  getCategoryLabel(category: string): string { return category; }
}
