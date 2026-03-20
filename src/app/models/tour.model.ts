// User Model
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  agencyId?: string;
}

export type UserRole = 'ADMIN' | 'STAFF' | 'CUSTOMER' | 'AGENCY';

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

// Tour Model
export interface Tour {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  duration: number;
  destination: string;
  category: TourCategory;
  price: number;
  discountPrice?: number | null;
  images: string[];
  highlights: string[];
  itinerary?: ItineraryDay[];
  included?: string[];
  excluded?: string[];
  difficulty?: 'EASY' | 'MODERATE' | 'CHALLENGING';
  minParticipants?: number;
  maxParticipants?: number;
  availability?: TourAvailability[];
  rating: number;
  reviewCount: number;
  featured?: boolean;
  isActive?: boolean;
}

export type TourCategory = 'safari' | 'trekking' | 'beach' | 'combo' | 'cultural';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string[];
  accommodation?: string;
}

export interface TourAvailability {
  date: Date;
  available: boolean;
  spotsLeft: number;
}

// Booking Model
export interface Booking {
  id: string;
  bookingReference: string;
  userId: string;
  tourId: string;
  tour?: Tour;
  status: BookingStatus;
  participants: Participant[];
  startDate: Date;
  endDate: Date;
  totalPrice: number;
  paymentStatus: PaymentStatus;
  paymentMethod?: string;
  specialRequests?: string;
  createdAt: Date;
  updatedAt: Date;
  assignedGuide?: Guide;
  assignedVehicle?: Vehicle;
}

export type BookingStatus = 'PENDING' | 'CONFIRMED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED' | 'REFUNDED';
export type PaymentStatus = 'PENDING' | 'PAID' | 'PARTIAL' | 'REFUNDED' | 'FAILED';

export interface Participant {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: Date;
  passportNumber?: string;
  nationality: string;
}

export interface Guide {
  id: string;
  name: string;
  email: string;
  phone: string;
  languages: string[];
  specialization: string;
  avatar?: string;
  rating: number;
}

export interface Vehicle {
  id: string;
  type: string;
  model: string;
  capacity: number;
  amenities: string[];
  image?: string;
}

// Agency Model
export interface Agency {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  logo?: string;
  website?: string;
  commissionRate: number;
  status: AgencyStatus;
  totalSales: number;
  totalCommission: number;
  createdAt: Date;
  contacts: AgencyContact[];
}

export type AgencyStatus = 'PENDING' | 'ACTIVE' | 'SUSPENDED' | 'INACTIVE';

export interface AgencyContact {
  name: string;
  email: string;
  phone: string;
  role: string;
}

// Dashboard Stats
export interface DashboardStats {
  totalRevenue: number;
  revenueChange: number;
  totalBookings: number;
  bookingsChange: number;
  activeCustomers: number;
  customerChange: number;
  averageRating: number;
  recentBookings: Booking[];
  revenueChartData: ChartData[];
  bookingsByStatus: { status: BookingStatus; count: number }[];
}

export interface ChartData {
  label: string;
  value: number;
}

// Notification Model
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}

// Tour Filter
export interface TourFilter {
  destination?: string;
  category?: TourCategory;
  minPrice?: number;
  maxPrice?: number;
  duration?: number;
  difficulty?: string;
  search?: string;
}
