import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, delay, map } from 'rxjs';
import { Booking, BookingStatus, Participant } from '../../models/tour.model';
import { MOCK_BOOKINGS, MOCK_TOURS } from '../../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private bookings: Booking[] = [...MOCK_BOOKINGS];
  private bookingsSubject = new BehaviorSubject<Booking[]>(this.bookings);
  
  bookings$ = this.bookingsSubject.asObservable();

  getBookings(): Observable<Booking[]> {
    return of(this.bookings).pipe(delay(300));
  }

  getBookingById(id: string): Observable<Booking | undefined> {
    const booking = this.bookings.find(b => b.id === id);
    return of(booking).pipe(delay(200));
  }

  getBookingByReference(reference: string): Observable<Booking | undefined> {
    const booking = this.bookings.find(b => b.bookingReference === reference);
    return of(booking).pipe(delay(200));
  }

  getBookingsByStatus(status: BookingStatus): Observable<Booking[]> {
    const filtered = this.bookings.filter(b => b.status === status);
    return of(filtered).pipe(delay(300));
  }

  getRecentBookings(limit: number = 5): Observable<Booking[]> {
    const sorted = [...this.bookings]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
    return of(sorted).pipe(delay(200));
  }

  createBooking(bookingData: Partial<Booking>): Observable<Booking> {
    const tour = MOCK_TOURS.find(t => t.id === bookingData.tourId);
    const newBooking: Booking = {
      id: Date.now().toString(),
      bookingReference: `GAS-${new Date().getFullYear()}-${String(this.bookings.length + 1).padStart(3, '0')}`,
      userId: bookingData.userId || '4',
      tourId: bookingData.tourId || '',
      tour: tour,
      status: 'PENDING',
      participants: bookingData.participants || [],
      startDate: bookingData.startDate || new Date(),
      endDate: bookingData.endDate || new Date(),
      totalPrice: bookingData.totalPrice || tour?.price || 0,
      paymentStatus: 'PENDING',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.bookings.unshift(newBooking);
    this.bookingsSubject.next(this.bookings);
    
    return of(newBooking).pipe(delay(800));
  }

  updateBookingStatus(id: string, status: BookingStatus): Observable<Booking | undefined> {
    const index = this.bookings.findIndex(b => b.id === id);
    if (index > -1) {
      this.bookings[index] = {
        ...this.bookings[index],
        status,
        updatedAt: new Date()
      };
      this.bookingsSubject.next(this.bookings);
      return of(this.bookings[index]).pipe(delay(500));
    }
    return of(undefined).pipe(delay(500));
  }

  cancelBooking(id: string): Observable<Booking | undefined> {
    return this.updateBookingStatus(id, 'CANCELLED');
  }

  confirmBooking(id: string): Observable<Booking | undefined> {
    return this.updateBookingStatus(id, 'CONFIRMED');
  }

  // Stats
  getBookingStats(): Observable<{
    total: number;
    pending: number;
    confirmed: number;
    completed: number;
    cancelled: number;
    totalRevenue: number;
  }> {
    const stats = {
      total: this.bookings.length,
      pending: this.bookings.filter(b => b.status === 'PENDING').length,
      confirmed: this.bookings.filter(b => b.status === 'CONFIRMED').length,
      completed: this.bookings.filter(b => b.status === 'COMPLETED').length,
      cancelled: this.bookings.filter(b => b.status === 'CANCELLED').length,
      totalRevenue: this.bookings
        .filter(b => b.paymentStatus === 'PAID')
        .reduce((sum, b) => sum + b.totalPrice, 0)
    };
    return of(stats).pipe(delay(200));
  }
}
