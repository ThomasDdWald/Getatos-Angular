# Getatos Safari - Angular Web Application

## Overview

This is a comprehensive Angular 18+ web application for Getatos Safari, a premium Tanzania safari tour company. The application includes:

- **Public Website**: Home page, Tours listing, Tour details
- **Booking System**: Multi-step booking wizard
- **Backoffice**: Admin dashboard for managing bookings, tours, customers
- **Agency Portal**: Partner dashboard for travel agencies with commission tracking
- **Multi-language Support**: English, German, Spanish, French, Chinese

## Tech Stack

- Angular 18+ (Standalone Components)
- TypeScript
- SCSS
- RxJS
- Angular Router (Lazy Loading)

## Project Structure

```
getatos-safari/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── services/
│   │   │       ├── auth.service.ts
│   │   │       ├── booking.service.ts
│   │   │       ├── tour.service.ts
│   │   │       ├── agency.service.ts
│   │   │       └── i18n.service.ts
│   │   ├── shared/
│   │   │   └── components/
│   │   │       ├── navbar/
│   │   │       └── footer/
│   │   ├── features/
│   │   │   ├── home/
│   │   │   ├── tours/
│   │   │   ├── booking/
│   │   │   ├── backoffice/
│   │   │   ├── agency/
│   │   │   └── auth/
│   │   ├── models/
│   │   │   └── tour.model.ts
│   │   └── data/
│   │       └── mock-data.ts
│   ├── styles.scss
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

## Features

### 1. Home Page
- Hero section with video/image background
- Featured tours carousel
- Why Choose Us section
- Call-to-action sections
- Newsletter signup

### 2. Tours Module
- Tour listing with filters (category, duration, price)
- Search functionality
- Tour categories: Wildlife, Cultural, Adventure, Luxury, Family, Photography

### 3. Backoffice (Admin/Staff)
- Dashboard with revenue and booking stats
- Booking management (view, confirm, cancel)
- Tour management (CRUD)
- Customer database
- Reports and analytics

### 4. Agency Portal
- Sales overview dashboard
- Commission tracking
- Quick booking tools
- Quote generator
- Client management
- Resources (brochures, guides)

### 5. Multi-language Support
Languages: 🇺🇸 English, 🇩🇪 Deutsch, 🇪🇸 Español, 🇫🇷 Français, 🇨🇳 中文

## Design System

### Colors
- Primary: #1A5F4A (Safari Green)
- Secondary: #D4A853 (Savanna Gold)
- Accent: #E85D04 (Sunset Orange)
- Background: #FAF8F5 (Warm White)
- Dark: #2D3436 (Charcoal)

### Typography
- Headings: Playfair Display
- Body: Source Sans 3
- Accent: Bebas Neue

## Mock Data

The application includes comprehensive mock data:
- 10 sample tours
- Sample users (Admin, Staff, Customer, Agency)
- Sample bookings with various statuses
- Sample agencies
- Dashboard statistics

## Running the Application

1. Install dependencies:
```bash
cd getatos-safari
npm install
```

2. Start development server:
```bash
npm start
```

3. Open browser: http://localhost:4200

## Demo Login

Use demo accounts to test different roles:
- **Admin**: Full access to backoffice
- **Staff**: Limited backoffice access
- **Agency**: Agency portal with commission tracking
- **Customer**: Booking management

## Routes

- `/` - Home page
- `/tours` - Tours listing
- `/tours/:slug` - Tour detail
- `/backoffice` - Admin dashboard
- `/agency` - Agency portal
- `/login` - Login page

## API Services

All data is served from mock services that return RxJS Observables with simulated delays, making it easy to swap with real API calls later.

## Notes

This is a technical mockup/prototype. For production:
- Replace mock services with real API calls
- Add proper authentication (JWT)
- Implement form validation
- Add error handling
- Set up production build
- Add unit tests
