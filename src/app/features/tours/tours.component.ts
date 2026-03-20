import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {
  tours: Tour[] = [
    {
      id: '1',
      name: 'Serengeti Big Five Safari',
      slug: 'serengeti-big-five',
      shortDescription: 'Experience the ultimate African wildlife adventure in the heart of Tanzania',
      description: 'Witness the great migration and spot the Big Five in their natural habitat',
      destination: 'Serengeti, Tanzania',
      duration: 7,
      price: 3500,
      discountPrice: 2999,
      category: 'safari',
      highlights: ['Big Five', 'Great Migration', 'Hot Air Balloon', 'Luxury Camps'],
      images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'],
      rating: 4.9,
      reviewCount: 234,
      included: [],
      itinerary: []
    },
    {
      id: '2',
      name: 'Kilimanjaro Summit Trek',
      slug: 'kilimanjaro-summit',
      shortDescription: 'Conquer Africa\'s highest peak with expert guides',
      description: 'Journey to the roof of Africa via the scenic Machame route',
      destination: 'Kilimanjaro, Tanzania',
      duration: 8,
      price: 4200,
      discountPrice: null,
      category: 'trekking',
      highlights: ['Uhuru Peak', '5 Star Lodges', 'Professional Guides', ' acclimatization'],
      images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'],
      rating: 4.8,
      reviewCount: 189,
      included: [],
      itinerary: []
    },
    {
      id: '3',
      name: 'Zanzibar Beach Paradise',
      slug: 'zanzibar-beach',
      shortDescription: 'Relax on pristine white sand beaches',
      description: 'Enjoy crystal clear waters and rich Swahili culture',
      destination: 'Zanzibar, Tanzania',
      duration: 5,
      price: 1800,
      discountPrice: 1499,
      category: 'beach',
      highlights: ['White Sand', 'Snorkeling', 'Stone Town', 'Spice Tour'],
      images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'],
      rating: 4.7,
      reviewCount: 156,
      included: [],
      itinerary: []
    },
    {
      id: '4',
      name: 'Ngorongoro Crater Safari',
      slug: 'ngorongoro-crater',
      shortDescription: 'Explore the world\'s largest inactive volcanic caldera',
      description: 'Discover incredible wildlife in this UNESCO World Heritage Site',
      destination: 'Ngorongoro, Tanzania',
      duration: 3,
      price: 2200,
      discountPrice: 1899,
      category: 'safari',
      highlights: ['Crater View', 'Flamingos', 'Elephant Gathering'],
      images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'],
      rating: 4.9,
      reviewCount: 178,
      included: [],
      itinerary: []
    },
    {
      id: '5',
      name: 'Tarangire Elephant Safari',
      slug: 'tarangire-elephant',
      shortDescription: 'Witness thousands of elephants in their natural habitat',
      description: 'Experience the elephant paradise of Tarangire National Park',
      destination: 'Tarangire, Tanzania',
      duration: 3,
      price: 1500,
      discountPrice: null,
      category: 'safari',
      highlights: ['Elephant herds', 'Baobab trees', 'Bird watching'],
      images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'],
      rating: 4.6,
      reviewCount: 123,
      included: [],
      itinerary: []
    },
    {
      id: '6',
      name: 'Lake Manyara Safari',
      slug: 'lake-manyara',
      shortDescription: 'Famous for tree-climbing lions and flamingos',
      description: 'Explore this beautiful park known for its diverse ecosystems',
      destination: 'Lake Manyara, Tanzania',
      duration: 2,
      price: 1200,
      discountPrice: 999,
      category: 'safari',
      highlights: ['Tree Lions', 'Flamingos', 'Hippo Pool'],
      images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'],
      rating: 4.5,
      reviewCount: 98,
      included: [],
      itinerary: []
    },
    {
      id: '7',
      name: 'Serengeti & Zanzibar Combo',
      slug: 'serengeti-zanzibar-combo',
      shortDescription: 'Combine safari adventure with beach relaxation',
      description: 'The perfect Tanzania experience combining wildlife and beach',
      destination: 'Serengeti & Zanzibar',
      duration: 10,
      price: 4800,
      discountPrice: 4299,
      category: 'combo',
      highlights: ['Safari', 'Beach', 'Culture', 'Adventure'],
      images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'],
      rating: 4.9,
      reviewCount: 267,
      included: [],
      itinerary: []
    },
    {
      id: '8',
      name: 'Cultural Tanzania Tour',
      slug: 'cultural-tanzania',
      shortDescription: 'Immerse in authentic Tanzanian culture and traditions',
      description: 'Visit local villages, markets, and learn about Maasai culture',
      destination: 'Arusha, Tanzania',
      duration: 4,
      price: 1600,
      discountPrice: null,
      category: 'cultural',
      highlights: ['Maasai Village', 'Coffee Tour', 'Traditional Dancers'],
      images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'],
      rating: 4.7,
      reviewCount: 89,
      included: [],
      itinerary: []
    }
  ];
  filteredTours: Tour[] = [];
  searchTerm = '';
  selectedCategory = '';
  selectedDuration = '';
  priceRange = '';
  categories: { value: string; label: string }[] = [
    { value: 'safari', label: 'Safari' },
    { value: 'trekking', label: 'Trekking' },
    { value: 'beach', label: 'Beach' },
    { value: 'combo', label: 'Combo' },
    { value: 'cultural', label: 'Cultural' }
  ];

  constructor() {}

  ngOnInit(): void {
    this.filteredTours = this.tours;
  }

  loadTours(): void {
    this.filteredTours = this.tours;
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

  getCategoryLabel(category: string): string {
    const cat = this.categories.find(c => c.value === category);
    return cat ? cat.label : category;
  }
}
