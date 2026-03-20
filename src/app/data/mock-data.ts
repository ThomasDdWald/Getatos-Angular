import { Tour, Booking, User, Agency, Guide, DashboardStats } from '../models/tour.model';

// Sample Tours Data
export const MOCK_TOURS: Tour[] = [
  {
    id: '1',
    name: 'Serengeti Great Migration Safari',
    slug: 'serengeti-great-migration',
    description: 'Witness the world-famous Great Migration in the Serengeti National Park. Watch as millions of wildebeest, zebra, and gazelle cross the plains in search of fresh grazing, accompanied by predators following the herds.',
    shortDescription: 'Witness the world-famous Great Migration in Serengeti',
    duration: 7,
    destination: 'Serengeti, Tanzania',
    category: 'WILDLIFE',
    price: 3500,
    discountPrice: 2999,
    images: [
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800',
      'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=800'
    ],
    highlights: [
      'Great Migration viewing',
      'Big Five safari',
      'Hot air balloon ride option',
      'Luxury tented camps',
      'Expert naturalist guides'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Arusha', description: 'Meet and greet at Kilimanjaro International Airport, transfer to your lodge.', meals: ['Dinner'], accommodation: 'Tented Lodge' },
      { day: 2, title: 'Tarangire National Park', description: 'Game drive in Tarangire, known for its elephant herds and baobab trees.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Tented Lodge' },
      { day: 3, title: 'Ngorongoro Crater', description: 'Descend into the world\'s largest inactive volcanic crater for full day game drive.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Crater View Lodge' },
      { day: 4, title: 'Serengeti Central', description: 'Enter the Serengeti and begin your migration exploration.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Luxury Tented Camp' },
      { day: 5, title: 'Great Migration', description: 'Full day tracking the migration herds.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Luxury Tented Camp' },
      { day: 6, title: 'Serengeti to Ngorongoro', description: 'Morning game drive, then transfer to Ngorongoro.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Crater View Lodge' },
      { day: 7, title: 'Departure', description: 'Morning breakfast, transfer to airport for departure.', meals: ['Breakfast'] }
    ],
    included: ['All meals', 'Game drives', 'Professional guide', '4x4 safari vehicle', 'Park fees', 'Accommodation'],
    excluded: ['International flights', 'Travel insurance', 'Tips', 'Personal expenses', 'Alcoholic drinks'],
    difficulty: 'EASY',
    minParticipants: 1,
    maxParticipants: 12,
    availability: [
      { date: new Date('2026-04-01'), available: true, spotsLeft: 8 },
      { date: new Date('2026-04-15'), available: true, spotsLeft: 5 },
      { date: new Date('2026-05-01'), available: true, spotsLeft: 10 }
    ],
    rating: 4.9,
    reviewCount: 127,
    featured: true,
    isActive: true
  },
  {
    id: '2',
    name: 'Ngorongoro Crater Explorer',
    slug: 'ngorongoro-crater-explorer',
    description: 'Explore the breathtaking Ngorongoro Conservation Area, a UNESCO World Heritage Site and home to the world\'s largest inactive volcanic crater.',
    shortDescription: 'Explore the magnificent Ngorongoro Crater',
    duration: 3,
    destination: 'Ngorongoro, Tanzania',
    category: 'WILDLIFE',
    price: 1800,
    images: [
      'https://images.unsplash.com/photo-1528030670386-4a2c2e8e5cc3?w=800',
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800'
    ],
    highlights: [
      'Full day crater safari',
      'Big Five sighting',
      'Lake Ndutu flamingos',
      'Cultural Maasai visit'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Ngorongoro', description: 'Transfer from Arusha to Ngorongoro, afternoon game drive.', meals: ['Lunch', 'Dinner'], accommodation: 'Crater Lodge' },
      { day: 2, title: 'Crater Floor Safari', description: 'Full day exploring the crater floor with picnic lunch.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Crater Lodge' },
      { day: 3, title: 'Departure', description: 'Morning walk, transfer to airport.', meals: ['Breakfast'] }
    ],
    included: ['All meals', 'Game drives', 'Park fees', 'Guide', 'Accommodation'],
    excluded: ['International flights', 'Tips', 'Personal expenses'],
    difficulty: 'EASY',
    minParticipants: 1,
    maxParticipants: 8,
    availability: [
      { date: new Date('2026-04-10'), available: true, spotsLeft: 6 },
      { date: new Date('2026-04-20'), available: true, spotsLeft: 4 }
    ],
    rating: 4.8,
    reviewCount: 89,
    featured: true,
    isActive: true
  },
  {
    id: '3',
    name: 'Kilimanjaro Summit Trek',
    slug: 'kilimanjaro-summit-trek',
    description: 'Conquer the roof of Africa on this challenging 8-day Machame Route expedition to the summit of Mount Kilimanjaro, Africa\'s highest peak.',
    shortDescription: 'Summit Africa\'s highest peak',
    duration: 8,
    destination: 'Mount Kilimanjaro, Tanzania',
    category: 'ADVENTURE',
    price: 4200,
    images: [
      'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800',
      'https://images.unsplash.com/photo-1575468130797-aa950b68e32d?w=800'
    ],
    highlights: [
      'Uhuru Peak summit',
      'Machame Route',
      'Professional mountain guides',
      'Full camping equipment',
      'Oxygen support'
    ],
    itinerary: [
      { day: 1, title: 'Machame Gate to Machame Camp', description: '6-8 hours trek through rainforest.', meals: ['Lunch', 'Dinner'], accommodation: 'Camping' },
      { day: 2, title: 'Machame Camp to Shira Camp', description: '5-7 hours to heathland.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Camping' },
      { day: 3, title: 'Shira Camp to Barranco Camp', description: '6-8 hours traverse the alpine desert.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Camping' },
      { day: 4, title: 'Barranco Camp to Karanga Camp', description: '4-5 hours with stunning views.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Camping' },
      { day: 5, title: 'Karanga Camp to Barafu Camp', description: '3-4 hours to base camp.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Camping' },
      { day: 6, title: 'Summit Day', description: 'Midnight start, 12-14 hours to Uhuru Peak and down to Mweka Camp.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Camping' },
      { day: 7, title: 'Mweka Camp to Mweka Gate', description: '3-4 hours descent.', meals: ['Breakfast', 'Lunch'], accommodation: 'Lodge' },
      { day: 8, title: 'Departure', description: 'Transfer to airport.', meals: ['Breakfast'] }
    ],
    included: ['All meals on mountain', 'Professional guides', 'Porters', 'Camping equipment', 'Park fees', 'Transfers'],
    excluded: ['International flights', 'Travel insurance', 'Tips', 'Personal climbing gear'],
    difficulty: 'CHALLENGING',
    minParticipants: 1,
    maxParticipants: 12,
    availability: [
      { date: new Date('2026-05-01'), available: true, spotsLeft: 10 },
      { date: new Date('2026-06-01'), available: true, spotsLeft: 8 }
    ],
    rating: 4.95,
    reviewCount: 203,
    featured: true,
    isActive: true
  },
  {
    id: '4',
    name: 'Zanzibar Beach Retreat',
    slug: 'zanzibar-beach-retreat',
    description: 'Relax on pristine white sand beaches and explore the historic Stone Town of Zanzibar, a melting pot of African, Arab, and European cultures.',
    shortDescription: 'Luxury beach escape in Zanzibar',
    duration: 5,
    destination: 'Zanzibar, Tanzania',
    category: 'LUXURY',
    price: 2200,
    images: [
      'https://images.unsplash.com/photo-1586861203927-800a5acdcc4d?w=800',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800'
    ],
    highlights: [
      'Stone Town tour',
      'Spice plantation visit',
      'Snorkeling at Mnemba',
      'Dhow sunset cruise',
      'Beach resort'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Zanzibar', description: 'Transfer to resort, free time at beach.', meals: ['Dinner'], accommodation: 'Beach Resort' },
      { day: 2, title: 'Stone Town Tour', description: 'Explore the historic UNESCO World Heritage site.', meals: ['Breakfast', 'Lunch'], accommodation: 'Beach Resort' },
      { day: 3, title: 'Spice Tour & Snorkeling', description: 'Visit spice plantation, afternoon snorkeling.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Beach Resort' },
      { day: 4, title: 'Dhow Cruise', description: 'Sunset dhow cruise with dinner.', meals: ['Breakfast', 'Dinner'], accommodation: 'Beach Resort' },
      { day: 5, title: 'Departure', description: 'Transfer to airport.', meals: ['Breakfast'] }
    ],
    included: ['Beach resort', 'All meals', 'Guided tours', 'Snorkeling gear', 'Transfers'],
    excluded: ['International flights', 'Tips', 'Personal expenses'],
    difficulty: 'EASY',
    minParticipants: 1,
    maxParticipants: 20,
    availability: [
      { date: new Date('2026-04-05'), available: true, spotsLeft: 15 },
      { date: new Date('2026-04-20'), available: true, spotsLeft: 12 }
    ],
    rating: 4.7,
    reviewCount: 156,
    featured: true,
    isActive: true
  },
  {
    id: '5',
    name: 'Cultural Tanzania Immersion',
    slug: 'cultural-tanzania-immersion',
    description: 'Immerse yourself in the rich cultural heritage of Tanzania through visits to traditional Maasai villages, Hadzabe bushmen, and ancient rock art sites.',
    shortDescription: 'Experience authentic Tanzanian cultures',
    duration: 6,
    destination: 'Lake Eyasi, Tanzania',
    category: 'CULTURAL',
    price: 2400,
    images: [
      'https://images.unsplash.com/photo-1516937941348-c09e554b9631?w=800',
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800'
    ],
    highlights: [
      'Maasai village visit',
      'Hadzabe hunter-gatherers',
      'Datoga tribe encounter',
      'Lake Eyasi sunset',
      'Traditional dance performances'
    ],
    itinerary: [
      { day: 1, title: 'Arusha to Lake Eyasi', description: 'Drive to Lake Eyasi, visit Datoga village.', meals: ['Lunch', 'Dinner'], accommodation: 'Cultural Lodge' },
      { day: 2, title: 'Hadzabe Experience', description: 'Full day with Hadzabe bushmen, hunting demonstration.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Cultural Lodge' },
      { day: 3, title: 'Maasai Boma', description: 'Visit traditional Maasai village, participate in ceremonies.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Maasai Community' },
      { day: 4, title: 'Lake Natron', description: 'Visit Lake Natron, flamingo viewing.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Lake Natron Camp' },
      { day: 5, title: 'Karangia Village', description: 'Cultural activities at local village.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Cultural Lodge' },
      { day: 6, title: 'Return to Arusha', description: 'Morning activity, return drive.', meals: ['Breakfast'] }
    ],
    included: ['All meals', 'Cultural guides', 'All village visits', 'Accommodation', 'Transfers'],
    excluded: ['International flights', 'Tips', 'Personal purchases'],
    difficulty: 'EASY',
    minParticipants: 2,
    maxParticipants: 10,
    availability: [
      { date: new Date('2026-04-15'), available: true, spotsLeft: 8 }
    ],
    rating: 4.85,
    reviewCount: 67,
    featured: false,
    isActive: true
  },
  {
    id: '6',
    name: 'Luxury Safari Lodge Experience',
    slug: 'luxury-safari-lodge',
    description: 'Experience the ultimate African luxury with stays at world-class lodges, private game drives, and exclusive wildlife encounters.',
    shortDescription: 'Ultimate luxury safari experience',
    duration: 5,
    destination: 'Tarangire, Tanzania',
    category: 'LUXURY',
    price: 5500,
    images: [
      'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800',
      'https://images.unsplash.com/photo-1534177616072-ef7dc12044f7?w=800'
    ],
    highlights: [
      'Private game drives',
      'Five-star lodges',
      'Bush dinners',
      'Spa treatments',
      'Wine cellar',
      'Private butler'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Style', description: 'Private transfer to luxury lodge, welcome ceremony.', meals: ['Dinner'], accommodation: 'Luxury Lodge' },
      { day: 2, title: 'Tarangire Private Safari', description: 'Exclusive game drive with private guide.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Luxury Lodge' },
      { day: 3, title: 'Ngorongoro Private', description: 'Private crater tour with champagne picnic.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Crater Lodge' },
      { day: 4, title: 'Serengeti Private', description: 'Private Serengeti experience, bush dinner.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Serengeti Lodge' },
      { day: 5, title: 'Departure', description: 'Morning spa treatment, transfer to airport.', meals: ['Breakfast'] }
    ],
    included: ['Luxury accommodation', 'All meals', 'Private guides', 'All drinks', 'Spa treatment', 'Park fees'],
    excluded: ['International flights', 'Gratuities'],
    difficulty: 'EASY',
    minParticipants: 1,
    maxParticipants: 6,
    availability: [
      { date: new Date('2026-05-10'), available: true, spotsLeft: 4 }
    ],
    rating: 5.0,
    reviewCount: 42,
    featured: true,
    isActive: true
  },
  {
    id: '7',
    name: 'Family Safari Adventure',
    slug: 'family-safari-adventure',
    description: 'A kid-friendly safari designed for families with engaging activities, safe environments, and comfortable accommodations suitable for all ages.',
    shortDescription: 'Perfect safari for the whole family',
    duration: 4,
    destination: 'Tarangire & Manyara, Tanzania',
    category: 'FAMILY',
    price: 2800,
    images: [
      'https://images.unsplash.com/photo-1549366021-9f761d450615?w=800',
      'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800'
    ],
    highlights: [
      'Tree-climbing lions',
      'Elephant sanctuary visit',
      'Junior ranger program',
      'Maasai village visit',
      'Family-friendly lodges'
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Tanzania', description: 'Arusha transfer, lodge settling, welcome dinner.', meals: ['Dinner'], accommodation: 'Family Lodge' },
      { day: 2, title: 'Tarangire Game Drive', description: 'Game drive, elephant watching, lunch by river.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Family Lodge' },
      { day: 3, title: 'Lake Manyara', description: 'Tree-climbing lions, flamingos, bird watching.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Family Lodge' },
      { day: 4, title: 'Cultural Day', description: 'Junior ranger program, Maasai village, departure.', meals: ['Breakfast', 'Lunch'] }
    ],
    included: ['Family lodge', 'All meals', 'Kids activities', 'Family guide', 'Transfers'],
    excluded: ['International flights', 'Tips', 'Personal expenses'],
    difficulty: 'EASY',
    minParticipants: 2,
    maxParticipants: 8,
    availability: [
      { date: new Date('2026-04-01'), available: true, spotsLeft: 6 },
      { date: new Date('2026-04-15'), available: true, spotsLeft: 8 }
    ],
    rating: 4.8,
    reviewCount: 98,
    featured: false,
    isActive: true
  },
  {
    id: '8',
    name: 'Photography Safari',
    slug: 'photography-safari',
    description: 'A professional photography tour led by expert wildlife photographers, designed to capture the perfect shot of Tanzania\'s stunning wildlife and landscapes.',
    shortDescription: 'Capture Tanzania\'s wildlife',
    duration: 10,
    destination: 'Serengeti, Ngorongoro, Tanzania',
    category: 'PHOTOGRAPHY',
    price: 5800,
    images: [
      'https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=800',
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800'
    ],
    highlights: [
      'Professional photo guide',
      'Customized vehicle',
      'Golden hour shoots',
      'Night photography',
      'Post-processing tips'
    ],
    itinerary: [
      { day: 1, title: 'Arusha Setup', description: 'Camera workshop, equipment check.', meals: ['Dinner'], accommodation: 'Photography Lodge' },
      { day: 2, title: 'Tarangire', description: 'Elephant photography, baobab silhouettes.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Photography Lodge' },
      { day: 3-5, title: 'Serengeti', description: 'Migration photography, predator action.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Mobile Camp' },
      { day: 6, title: 'Ndutu', description: 'Lion and leopard photography.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Ndutu Lodge' },
      { day: 7-8, title: 'Ngorongoro', description: 'Crater photography, hippo pools.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Crater Lodge' },
      { day: 9, title: 'Lake Manyara', description: 'Flamingos, tree-climbing lions.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Photography Lodge' },
      { day: 10, title: 'Review & Departure', description: 'Photo review session, airport transfer.', meals: ['Breakfast'] }
    ],
    included: ['Photo guide', 'All meals', 'Camera equipment rental', 'Park fees', 'Accommodation', 'Transfers'],
    excluded: ['International flights', 'Tips', 'Personal equipment'],
    difficulty: 'MODERATE',
    minParticipants: 4,
    maxParticipants: 8,
    availability: [
      { date: new Date('2026-06-01'), available: true, spotsLeft: 6 }
    ],
    rating: 4.95,
    reviewCount: 31,
    featured: false,
    isActive: true
  },
  {
    id: '9',
    name: 'Walking Safari Experience',
    slug: 'walking-safari',
    description: 'Get close to nature on foot with an expert guide, tracking wildlife and learning about bush survival in the African wilderness.',
    shortDescription: 'Adventure on foot in the bush',
    duration: 4,
    destination: 'Ruaha, Tanzania',
    category: 'ADVENTURE',
    price: 1900,
    images: [
      'https://images.unsplash.com/photo-1550929002-7a9886d51c32?w=800',
      'https://images.unsplash.com/photo-1517821099606-cef63a9a8e8d?w=800'
    ],
    highlights: [
      'Guided bush walks',
      'Track wildlife on foot',
      'Bird watching',
      'Camping under stars',
      'Ranger training'
    ],
    itinerary: [
      { day: 1, title: 'Arusha to Ruaha', description: 'Flight to Ruaha, afternoon walk.', meals: ['Lunch', 'Dinner'], accommodation: 'Bush Camp' },
      { day: 2, title: 'Full Day Walking', description: 'All-day wilderness walk, tracking.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Bush Camp' },
      { day: 3, title: 'Night Safari', description: 'Evening walk, night game drive.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Bush Camp' },
      { day: 4, title: 'Return', description: 'Morning walk, flight to Arusha.', meals: ['Breakfast'] }
    ],
    included: ['Bush camp', 'All meals', 'Expert guide', 'Park fees', 'Flights'],
    excluded: ['International flights', 'Tips', 'Personal expenses'],
    difficulty: 'MODERATE',
    minParticipants: 2,
    maxParticipants: 8,
    availability: [
      { date: new Date('2026-05-15'), available: true, spotsLeft: 6 }
    ],
    rating: 4.7,
    reviewCount: 45,
    featured: false,
    isActive: true
  },
  {
    id: '10',
    name: 'Balloon Safari Combo',
    slug: 'balloon-safari-combo',
    description: 'Combine a hot air balloon ride over the Serengeti with a classic safari for an unforgettable aerial and ground wildlife experience.',
    shortDescription: 'Safari from the sky and ground',
    duration: 6,
    destination: 'Serengeti, Tanzania',
    category: 'ADVENTURE',
    price: 4500,
    images: [
      'https://images.unsplash.com/photo-1575468130797-aa950b68e32d?w=800',
      'https://images.unsplash.com/photo-1551619008-b80c0e5f2e0f?w=800'
    ],
    highlights: [
      'Hot air balloon',
      'Bush breakfast',
      'Migration viewing',
      'Big Five',
      'Luxury camps'
    ],
    itinerary: [
      { day: 1, title: 'Arrival', description: 'Transfer to Serengeti.', meals: ['Dinner'], accommodation: 'Luxury Camp' },
      { day: 2, title: 'Balloon Day', description: 'Sunrise balloon ride, champagne breakfast.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Luxury Camp' },
      { day: 3, title: 'Central Serengeti', description: 'Full day game drive.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Luxury Camp' },
      { day: 4, title: 'Northern Serengeti', description: 'Drive to migration area.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Luxury Camp' },
      { day: 5, title: 'Mara River', description: 'River crossing viewing.', meals: ['Breakfast', 'Lunch', 'Dinner'], accommodation: 'Luxury Camp' },
      { day: 6, title: 'Departure', description: 'Morning walk, transfer.', meals: ['Breakfast'] }
    ],
    included: ['Balloon ride', 'All meals', 'Game drives', 'Park fees', 'Accommodation'],
    excluded: ['International flights', 'Tips'],
    difficulty: 'EASY',
    minParticipants: 2,
    maxParticipants: 10,
    availability: [
      { date: new Date('2026-06-15'), available: true, spotsLeft: 8 }
    ],
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    isActive: true
  }
];

// Sample Users
export const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'admin@getatos.com',
    firstName: 'John',
    lastName: 'Mwakidudu',
    phone: '+255 123 456 789',
    role: 'ADMIN',
    createdAt: new Date('2024-01-15'),
    avatar: 'https://i.pravatar.cc/150?u=admin'
  },
  {
    id: '2',
    email: 'staff@getatos.com',
    firstName: 'Sarah',
    lastName: 'Kombo',
    phone: '+255 234 567 890',
    role: 'STAFF',
    createdAt: new Date('2024-03-20'),
    avatar: 'https://i.pravatar.cc/150?u=staff'
  },
  {
    id: '3',
    email: 'guide@getatos.com',
    firstName: 'Moses',
    lastName: 'Lerionka',
    phone: '+255 345 678 901',
    role: 'STAFF',
    createdAt: new Date('2024-02-10'),
    avatar: 'https://i.pravatar.cc/150?u=guide'
  },
  {
    id: '4',
    email: 'client@example.com',
    firstName: 'Michael',
    lastName: 'Schmidt',
    phone: '+49 123 456 789',
    role: 'CUSTOMER',
    createdAt: new Date('2025-12-01'),
    avatar: 'https://i.pravatar.cc/150?u=client'
  },
  {
    id: '5',
    email: 'safari@adventures.co.uk',
    firstName: 'Emma',
    lastName: 'Thompson',
    role: 'AGENCY',
    createdAt: new Date('2025-06-15'),
    agencyId: 'agency1'
  }
];

// Sample Guides
export const MOCK_GUIDES: Guide[] = [
  {
    id: 'g1',
    name: 'Moses Lerionka',
    email: 'moses@getatos.com',
    phone: '+255 345 678 901',
    languages: ['English', 'Swahili', 'Maasai'],
    specialization: 'Wildlife Photography',
    rating: 4.9
  },
  {
    id: 'g2',
    name: 'Grace William',
    email: 'grace@getatos.com',
    phone: '+255 456 789 012',
    languages: ['English', 'Swahili', 'German'],
    specialization: 'Cultural Tours',
    rating: 4.8
  },
  {
    id: 'g3',
    name: 'David Kimani',
    email: 'david@getatos.com',
    phone: '+255 567 890 123',
    languages: ['English', 'Swahili', 'French'],
    specialization: 'Mountain Climbing',
    rating: 4.95
  }
];

// Sample Bookings
export const MOCK_BOOKINGS: Booking[] = [
  {
    id: 'b1',
    bookingReference: 'GAS-2026-001',
    userId: '4',
    tourId: '1',
    tour: MOCK_TOURS[0],
    status: 'CONFIRMED',
    participants: [
      { firstName: 'Michael', lastName: 'Schmidt', email: 'client@example.com', phone: '+49 123 456 789', dateOfBirth: new Date('1985-03-15'), nationality: 'German' },
      { firstName: 'Anna', lastName: 'Schmidt', email: 'anna@example.com', phone: '+49 123 456 790', dateOfBirth: new Date('1987-06-20'), nationality: 'German' }
    ],
    startDate: new Date('2026-04-15'),
    endDate: new Date('2026-04-21'),
    totalPrice: 5998,
    paymentStatus: 'PAID',
    paymentMethod: 'Bank Transfer',
    createdAt: new Date('2026-02-10'),
    updatedAt: new Date('2026-02-12'),
    assignedGuide: MOCK_GUIDES[0]
  },
  {
    id: 'b2',
    bookingReference: 'GAS-2026-002',
    userId: '4',
    tourId: '3',
    tour: MOCK_TOURS[2],
    status: 'PENDING',
    participants: [
      { firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '+1 123 456 789', dateOfBirth: new Date('1990-01-01'), nationality: 'American' }
    ],
    startDate: new Date('2026-05-01'),
    endDate: new Date('2026-05-08'),
    totalPrice: 4200,
    paymentStatus: 'PENDING',
    createdAt: new Date('2026-03-01'),
    updatedAt: new Date('2026-03-01')
  },
  {
    id: 'b3',
    bookingReference: 'GAS-2026-003',
    userId: '4',
    tourId: '4',
    tour: MOCK_TOURS[3],
    status: 'COMPLETED',
    participants: [
      { firstName: 'Emma', lastName: 'Wilson', email: 'emma@example.com', phone: '+44 123 456 789', dateOfBirth: new Date('1988-08-12'), nationality: 'British' },
      { firstName: 'James', lastName: 'Wilson', email: 'james@example.com', phone: '+44 123 456 790', dateOfBirth: new Date('1985-11-25'), nationality: 'British' },
      { firstName: 'Sophie', lastName: 'Wilson', email: 'sophie@example.com', phone: '+44 123 456 791', dateOfBirth: new Date('2015-03-05'), nationality: 'British' }
    ],
    startDate: new Date('2026-02-20'),
    endDate: new Date('2026-02-24'),
    totalPrice: 6600,
    paymentStatus: 'PAID',
    paymentMethod: 'Credit Card',
    createdAt: new Date('2026-01-15'),
    updatedAt: new Date('2026-02-24'),
    assignedGuide: MOCK_GUIDES[1]
  },
  {
    id: 'b4',
    bookingReference: 'GAS-2026-004',
    userId: '4',
    tourId: '6',
    tour: MOCK_TOURS[5],
    status: 'CONFIRMED',
    participants: [
      { firstName: 'Robert', lastName: 'Brown', email: 'robert@example.com', phone: '+1 234 567 890', dateOfBirth: new Date('1975-05-30'), nationality: 'American' }
    ],
    startDate: new Date('2026-05-10'),
    endDate: new Date('2026-05-14'),
    totalPrice: 5500,
    paymentStatus: 'PAID',
    paymentMethod: 'Bank Transfer',
    createdAt: new Date('2026-03-05'),
    updatedAt: new Date('2026-03-07'),
    assignedGuide: MOCK_GUIDES[0]
  },
  {
    id: 'b5',
    bookingReference: 'GAS-2026-005',
    userId: '4',
    tourId: '7',
    tour: MOCK_TOURS[6],
    status: 'CANCELLED',
    participants: [
      { firstName: 'Lisa', lastName: 'Taylor', email: 'lisa@example.com', phone: '+61 123 456 789', dateOfBirth: new Date('1992-02-14'), nationality: 'Australian' }
    ],
    startDate: new Date('2026-04-01'),
    endDate: new Date('2026-04-04'),
    totalPrice: 2800,
    paymentStatus: 'REFUNDED',
    paymentMethod: 'Credit Card',
    specialRequests: 'Family with 2 children',
    createdAt: new Date('2026-02-20'),
    updatedAt: new Date('2026-03-01')
  }
];

// Sample Agencies
export const MOCK_AGENCIES: Agency[] = [
  {
    id: 'agency1',
    name: 'Safari Adventures UK',
    email: 'safari@adventures.co.uk',
    phone: '+44 20 1234 5678',
    address: '123 Oxford Street, London',
    country: 'United Kingdom',
    commissionRate: 15,
    status: 'ACTIVE',
    totalSales: 125000,
    totalCommission: 18750,
    createdAt: new Date('2025-06-15'),
    contacts: [
      { name: 'Emma Thompson', email: 'emma@adventures.co.uk', phone: '+44 20 1234 5679', role: 'Sales Manager' }
    ]
  },
  {
    id: 'agency2',
    name: 'Alpine Safari GmbH',
    email: 'info@alpinesafari.de',
    phone: '+49 30 12345678',
    address: 'Unter den Linden 10, Berlin',
    country: 'Germany',
    commissionRate: 12,
    status: 'ACTIVE',
    totalSales: 89000,
    totalCommission: 10680,
    createdAt: new Date('2025-08-20'),
    contacts: [
      { name: 'Hans Mueller', email: 'hans@alpinesafari.de', phone: '+49 30 12345679', role: 'Managing Director' }
    ]
  },
  {
    id: 'agency3',
    name: 'Trek Australia',
    email: 'book@trekaustralia.com.au',
    phone: '+61 2 1234 5678',
    address: '45 George Street, Sydney',
    country: 'Australia',
    commissionRate: 18,
    status: 'PENDING',
    totalSales: 0,
    totalCommission: 0,
    createdAt: new Date('2026-03-01'),
    contacts: [
      { name: 'James Wilson', email: 'james@trekaustralia.com.au', phone: '+61 2 1234 5679', role: 'Owner' }
    ]
  }
];

// Dashboard Stats
export const MOCK_DASHBOARD_STATS: DashboardStats = {
  totalRevenue: 285400,
  revenueChange: 12.5,
  totalBookings: 156,
  bookingsChange: 8.3,
  activeCustomers: 89,
  customerChange: 15.2,
  averageRating: 4.85,
  recentBookings: MOCK_BOOKINGS.slice(0, 5),
  revenueChartData: [
    { label: 'Jan', value: 32000 },
    { label: 'Feb', value: 28000 },
    { label: 'Mar', value: 45000 },
    { label: 'Apr', value: 38000 },
    { label: 'May', value: 52000 },
    { label: 'Jun', value: 48000 }
  ],
  bookingsByStatus: [
    { status: 'PENDING', count: 12 },
    { status: 'CONFIRMED', count: 45 },
    { status: 'IN_PROGRESS', count: 8 },
    { status: 'COMPLETED', count: 78 },
    { status: 'CANCELLED', count: 13 }
  ]
};

// Destinations for filter
export const MOCK_DESTINATIONS = [
  'Serengeti',
  'Ngorongoro',
  'Mount Kilimanjaro',
  'Zanzibar',
  'Tarangire',
  'Lake Manyara',
  'Ruaha',
  'Selous'
];
