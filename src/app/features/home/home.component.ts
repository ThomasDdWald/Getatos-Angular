import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredTours: Tour[] = [
    {
      id: '1',
      name: 'Serengeti Big Five Safari',
      slug: 'serengeti-big-five',
      shortDescription: 'Experience the ultimate African wildlife adventure',
      description: 'Witness the great migration and spot the Big Five',
      destination: 'Serengeti, Tanzania',
      duration: 7,
      price: 3500,
      discountPrice: 2999,
      category: 'safari',
      highlights: ['Big Five', 'Great Migration', 'Hot Air Balloon'],
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
      shortDescription: 'Conquer Africa\'s highest peak',
      description: 'Journey to the roof of Africa via Machame route',
      destination: 'Kilimanjaro, Tanzania',
      duration: 8,
      price: 4200,
      discountPrice: null,
      category: 'trekking',
      highlights: ['Uhuru Peak', '5 Star Lodges', 'Professional Guides'],
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
      description: 'Enjoy crystal clear waters and Swahili culture',
      destination: 'Zanzibar, Tanzania',
      duration: 5,
      price: 1800,
      discountPrice: 1499,
      category: 'beach',
      highlights: ['White Sand', 'Snorkeling', 'Stone Town'],
      images: ['https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800'],
      rating: 4.7,
      reviewCount: 156,
      included: [],
      itinerary: []
    }
  ];
  
  heroTitle = 'Experience the Ultimate Safari Adventure';
  heroSubtitle = 'Discover the breathtaking wildlife and landscapes of Tanzania with our expert-guided tours';
  heroCta = 'Explore Our Tours';
  featuredTitle = 'Featured Tours';
  featuredSubtitle = 'Discover our most popular safari experiences';
  whyTitle = 'Why Choose Us';
  whySubtitle = 'Experience the adventure of a lifetime';
  ctaTitle = 'Ready for Your Safari?';
  ctaSubtitle = 'Book now and create unforgettable memories with Getatos Safari';
  ctaButton = 'Start Your Journey';
  daysLabel = 'days';
  perPersonLabel = 'per person';
  viewDetailsLabel = 'View Details';

  constructor() {}

  ngOnInit(): void {}
}
