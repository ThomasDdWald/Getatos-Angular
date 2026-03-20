import { Component, OnInit } from '@angular/core';
import { Tour } from '../../models/tour.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredTours: Tour[] = [];
  heroTitle = 'Experience the Ultimate Safari Adventure';
  heroSubtitle = 'Discover the breathtaking wildlife and landscapes of Tanzania';
  heroCta = 'Explore Our Tours';
  featuredTitle = 'Featured Tours';
  featuredSubtitle = 'Discover our most popular safari experiences';
  whyTitle = 'Why Choose Us';
  whySubtitle = 'Experience the adventure of a lifetime';
  ctaTitle = 'Ready for Your Safari?';
  ctaSubtitle = 'Book now and create unforgettable memories';
  ctaButton = 'Start Your Journey';
  daysLabel = 'days';
  perPersonLabel = 'per person';
  viewDetailsLabel = 'View Details';

  constructor() {}

  ngOnInit(): void {}
}
