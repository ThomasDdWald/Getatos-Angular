import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Tour, TourFilter, TourCategory } from '../../models/tour.model';
import { MOCK_TOURS, MOCK_DESTINATIONS } from '../../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class TourService {
  private tours: Tour[] = MOCK_TOURS;

  getTours(filter?: TourFilter): Observable<Tour[]> {
    let filtered = [...this.tours];

    if (filter) {
      if (filter.destination) {
        filtered = filtered.filter(t => 
          t.destination.toLowerCase().includes(filter.destination!.toLowerCase())
        );
      }
      if (filter.category) {
        filtered = filtered.filter(t => t.category === filter.category);
      }
      if (filter.minPrice) {
        filtered = filtered.filter(t => t.price >= filter.minPrice!);
      }
      if (filter.maxPrice) {
        filtered = filtered.filter(t => t.price <= filter.maxPrice!);
      }
      if (filter.duration) {
        filtered = filtered.filter(t => t.duration <= filter.duration!);
      }
      if (filter.search) {
        const search = filter.search.toLowerCase();
        filtered = filtered.filter(t => 
          t.name.toLowerCase().includes(search) ||
          t.description.toLowerCase().includes(search) ||
          t.destination.toLowerCase().includes(search)
        );
      }
    }

    return of(filtered).pipe(delay(300));
  }

  getTourById(id: string): Observable<Tour | undefined> {
    const tour = this.tours.find(t => t.id === id);
    return of(tour).pipe(delay(200));
  }

  getTourBySlug(slug: string): Observable<Tour | undefined> {
    const tour = this.tours.find(t => t.slug === slug);
    return of(tour).pipe(delay(200));
  }

  getFeaturedTours(): Observable<Tour[]> {
    const featured = this.tours.filter(t => t.featured && t.isActive);
    return of(featured).pipe(delay(300));
  }

  getDestinations(): Observable<string[]> {
    return of(MOCK_DESTINATIONS).pipe(delay(100));
  }

  getCategories(): { value: TourCategory; label: string }[] {
    return [
      { value: 'WILDLIFE', label: 'Wildlife Safari' },
      { value: 'CULTURAL', label: 'Cultural Tour' },
      { value: 'ADVENTURE', label: 'Adventure' },
      { value: 'LUXURY', label: 'Luxury' },
      { value: 'FAMILY', label: 'Family Friendly' },
      { value: 'PHOTOGRAPHY', label: 'Photography' }
    ];
  }

  // Admin functions
  createTour(tour: Partial<Tour>): Observable<Tour> {
    const newTour: Tour = {
      ...tour as Tour,
      id: Date.now().toString(),
      rating: 0,
      reviewCount: 0,
      isActive: true
    };
    this.tours.push(newTour);
    return of(newTour).pipe(delay(500));
  }

  updateTour(id: string, updates: Partial<Tour>): Observable<Tour | undefined> {
    const index = this.tours.findIndex(t => t.id === id);
    if (index > -1) {
      this.tours[index] = { ...this.tours[index], ...updates };
      return of(this.tours[index]).pipe(delay(500));
    }
    return of(undefined).pipe(delay(500));
  }

  deleteTour(id: string): Observable<boolean> {
    const index = this.tours.findIndex(t => t.id === id);
    if (index > -1) {
      this.tours.splice(index, 1);
      return of(true).pipe(delay(500));
    }
    return of(false).pipe(delay(500));
  }
}
