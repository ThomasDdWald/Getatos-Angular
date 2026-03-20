import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../core/services/i18n.service';
import { BookingService } from '../../core/services/booking.service';
import { AgencyService } from '../../core/services/agency.service';
import { Booking, BookingStatus, DashboardStats } from '../../models/tour.model';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss'],
  imports: [RouterModule]
})
export class BackofficeComponent implements OnInit {
  stats: DashboardStats | null = null;
  recentBookings: Booking[] = [];
  pendingBookings = 0;
  currentDate = new Date();

  constructor(
    public i18n: I18nService,
    private bookingService: BookingService,
    private agencyService: AgencyService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.agencyService.getDashboardStats().subscribe(stats => {
      this.stats = stats;
    });
    this.bookingService.getRecentBookings(10).subscribe(bookings => {
      this.recentBookings = bookings;
      this.pendingBookings = bookings.filter(b => b.status === 'PENDING').length;
    });
  }

  getStatusClass(status: BookingStatus): string {
    const classes: Record<string, string> = {
      'PENDING': 'pending',
      'CONFIRMED': 'confirmed',
      'IN_PROGRESS': 'in-progress',
      'COMPLETED': 'completed',
      'CANCELLED': 'cancelled'
    };
    return classes[status] || 'pending';
  }

  getStatusLabel(status: BookingStatus): string {
    const labels: Record<string, string> = {
      'PENDING': this.i18n.t('status.pending'),
      'CONFIRMED': this.i18n.t('status.confirmed'),
      'IN_PROGRESS': this.i18n.t('status.inProgress'),
      'COMPLETED': this.i18n.t('status.completed'),
      'CANCELLED': this.i18n.t('status.cancelled')
    };
    return labels[status] || status;
  }

  confirmBooking(booking: Booking): void {
    this.bookingService.confirmBooking(booking.id).subscribe(() => {
      this.loadDashboardData();
    });
  }

  cancelBooking(booking: Booking): void {
    this.bookingService.cancelBooking(booking.id).subscribe(() => {
      this.loadDashboardData();
    });
  }
}
