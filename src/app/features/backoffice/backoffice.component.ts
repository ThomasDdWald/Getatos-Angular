import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../core/services/i18n.service';
import { BookingService } from '../../core/services/booking.service';
import { AgencyService } from '../../core/services/agency.service';
import { Booking, BookingStatus, DashboardStats } from '../../models/tour.model';

@Component({
  selector: 'app-backoffice',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="backoffice-wrapper">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <h3><i class="fas fa-cogs"></i> Backoffice</h3>
        </div>
        <nav class="sidebar-nav">
          <a routerLink="/backoffice" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <i class="fas fa-tachometer-alt"></i> {{ i18n.t('backoffice.dashboard') }}
          </a>
          <a routerLink="/backoffice/bookings" routerLinkActive="active">
            <i class="fas fa-calendar-check"></i> {{ i18n.t('backoffice.bookings') }}
            <span class="badge">{{ pendingBookings }}</span>
          </a>
          <a routerLink="/backoffice/tours" routerLinkActive="active">
            <i class="fas fa-map"></i> {{ i18n.t('backoffice.tours') }}
          </a>
          <a routerLink="/backoffice/customers" routerLinkActive="active">
            <i class="fas fa-users"></i> {{ i18n.t('backoffice.customers') }}
          </a>
          <a routerLink="/backoffice/reports" routerLinkActive="active">
            <i class="fas fa-chart-bar"></i> {{ i18n.t('backoffice.reports') }}
          </a>
          <a routerLink="/backoffice/agencies" routerLinkActive="active">
            <i class="fas fa-handshake"></i> Agencies
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Header -->
        <header class="content-header">
          <h2>{{ i18n.t('backoffice.dashboard') }}</h2>
          <div class="header-actions">
            <span class="date">{{ currentDate | date:'fullDate' }}</span>
          </div>
        </header>

        <!-- Stats Cards -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon revenue">
              <i class="fas fa-dollar-sign"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">{{ i18n.t('backoffice.totalRevenue') }}</span>
              <span class="stat-value">\${{ stats?.totalRevenue | number }}</span>
              <span class="stat-change positive">+{{ stats?.revenueChange }}%</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon bookings">
              <i class="fas fa-calendar"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">{{ i18n.t('backoffice.totalBookings') }}</span>
              <span class="stat-value">{{ stats?.totalBookings }}</span>
              <span class="stat-change positive">+{{ stats?.bookingsChange }}%</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon customers">
              <i class="fas fa-user-friends"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">{{ i18n.t('backoffice.activeCustomers') }}</span>
              <span class="stat-value">{{ stats?.activeCustomers }}</span>
              <span class="stat-change positive">+{{ stats?.customerChange }}%</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon rating">
              <i class="fas fa-star"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">Average Rating</span>
              <span class="stat-value">{{ stats?.averageRating }}</span>
              <span class="stat-change positive">Excellent</span>
            </div>
          </div>
        </div>

        <!-- Recent Bookings -->
        <div class="content-section">
          <div class="section-header">
            <h3>{{ i18n.t('backoffice.recentBookings') }}</h3>
            <a routerLink="/backoffice/bookings" class="btn btn-sm btn-outline">View All</a>
          </div>

          <div class="table-responsive">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Reference</th>
                  <th>Customer</th>
                  <th>Tour</th>
                  <th>Date</th>
                  <th>{{ i18n.t('backoffice.status') }}</th>
                  <th>Amount</th>
                  <th>{{ i18n.t('backoffice.actions') }}</th>
                </tr>
              </thead>
              <tbody>
                @for (booking of recentBookings; track booking.id) {
                  <tr>
                    <td class="ref-cell">{{ booking.bookingReference }}</td>
                    <td>
                      <div class="customer-cell">
                        <span class="customer-name">{{ booking.participants[0]?.firstName }} {{ booking.participants[0]?.lastName }}</span>
                        <span class="customer-email">{{ booking.participants[0]?.email }}</span>
                      </div>
                    </td>
                    <td>{{ booking.tour?.name | slice:0:30 }}...</td>
                    <td>{{ booking.startDate | date:'mediumDate' }}</td>
                    <td>
                      <span class="status-badge" [class]="getStatusClass(booking.status)">
                        {{ getStatusLabel(booking.status) }}
                      </span>
                    </td>
                    <td class="amount">\${{ booking.totalPrice | number }}</td>
                    <td>
                      <div class="action-buttons">
                        <button class="btn-icon" title="View" (click)="viewBooking(booking)">
                          <i class="fas fa-eye"></i>
                        </button>
                        @if (booking.status === 'PENDING') {
                          <button class="btn-icon success" title="Confirm" (click)="confirmBooking(booking)">
                            <i class="fas fa-check"></i>
                          </button>
                        }
                        @if (booking.status === 'CONFIRMED') {
                          <button class="btn-icon warning" title="Cancel" (click)="cancelBooking(booking)">
                            <i class="fas fa-times"></i>
                          </button>
                        }
                      </div>
                    </td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="quick-actions">
          <h3>Quick Actions</h3>
          <div class="actions-grid">
            <a routerLink="/backoffice/tours/new" class="action-card">
              <i class="fas fa-plus-circle"></i>
              <span>Add New Tour</span>
            </a>
            <a routerLink="/backoffice/bookings/new" class="action-card">
              <i class="fas fa-calendar-plus"></i>
              <span>Create Booking</span>
            </a>
            <a routerLink="/backoffice/reports" class="action-card">
              <i class="fas fa-file-export"></i>
              <span>Export Reports</span>
            </a>
            <a routerLink="/backoffice/agencies/new" class="action-card">
              <i class="fas fa-user-plus"></i>
              <span>Add Agency</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .backoffice-wrapper {
      display: flex;
      min-height: calc(100vh - 80px);
      background: #F5F5F0;
    }

    /* Sidebar */
    .sidebar {
      width: 260px;
      background: #1A202C;
      color: white;
      flex-shrink: 0;
    }

    .sidebar-header {
      padding: 1.5rem;
      border-bottom: 1px solid #2D3748;

      h3 {
        color: white;
        font-size: 1.25rem;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }

    .sidebar-nav {
      padding: 1rem 0;

      a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.875rem 1.5rem;
        color: #A0AEC0;
        text-decoration: none;
        transition: all 0.2s ease;
        position: relative;

        &:hover, &.active {
          color: white;
          background: rgba(255, 255, 255, 0.05);
        }

        &.active {
          background: #1A5F4A;
        }

        .badge {
          margin-left: auto;
          background: #E85D04;
          color: white;
          padding: 0.125rem 0.5rem;
          border-radius: 50px;
          font-size: 0.75rem;
        }
      }
    }

    /* Main Content */
    .main-content {
      flex: 1;
      padding: 2rem;
      overflow-y: auto;
    }

    .content-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;

      h2 {
        margin: 0;
      }

      .date {
        color: #718096;
      }
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      display: flex;
      gap: 1rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .stat-icon {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;

      &.revenue { background: rgba(26, 95, 74, 0.1); color: #1A5F4A; }
      &.bookings { background: rgba(212, 168, 83, 0.1); color: #D4A853; }
      &.customers { background: rgba(232, 93, 4, 0.1); color: #E85D04; }
      &.rating { background: rgba(16, 185, 129, 0.1); color: #10B981; }
    }

    .stat-info {
      display: flex;
      flex-direction: column;

      .stat-label {
        font-size: 0.875rem;
        color: #718096;
      }

      .stat-value {
        font-size: 1.75rem;
        font-weight: 700;
        color: #1A202C;
      }

      .stat-change {
        font-size: 0.75rem;
        
        &.positive { color: #10B981; }
        &.negative { color: #EF4444; }
      }
    }

    /* Table Section */
    .content-section {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;

      h3 {
        margin: 0;
      }
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;

      th, td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #E2E8F0;
      }

      th {
        font-weight: 600;
        color: #4A5568;
        font-size: 0.875rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      tbody tr {
        transition: background 0.2s ease;

        &:hover {
          background: #F7FAFC;
        }
      }
    }

    .ref-cell {
      font-family: monospace;
      font-weight: 600;
      color: #1A5F4A;
    }

    .customer-cell {
      display: flex;
      flex-direction: column;

      .customer-name {
        font-weight: 500;
      }

      .customer-email {
        font-size: 0.8rem;
        color: #718096;
      }
    }

    .status-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 600;

      &.pending { background: #FEF3C7; color: #D97706; }
      &.confirmed { background: #DBEAFE; color: #2563EB; }
      &.completed { background: #D1FAE5; color: #059669; }
      &.cancelled { background: #FEE2E2; color: #DC2626; }
      &.in-progress { background: #E0E7FF; color: #4F46E5; }
    }

    .amount {
      font-weight: 600;
      color: #1A5F4A;
    }

    .action-buttons {
      display: flex;
      gap: 0.5rem;
    }

    .btn-icon {
      width: 32px;
      height: 32px;
      border: none;
      border-radius: 6px;
      background: #F3F4F6;
      color: #4B5563;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background: #E5E7EB;
      }

      &.success:hover {
        background: #D1FAE5;
        color: #059669;
      }

      &.warning:hover {
        background: #FEE2E2;
        color: #DC2626;
      }
    }

    /* Quick Actions */
    .quick-actions {
      h3 {
        margin-bottom: 1rem;
      }
    }

    .actions-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    .action-card {
      background: white;
      border-radius: 12px;
      padding: 1.5rem;
      text-align: center;
      text-decoration: none;
      color: #4A5568;
      transition: all 0.2s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        color: #1A5F4A;

        i {
          color: #1A5F4A;
        }
      }

      i {
        font-size: 2rem;
        color: #D4A853;
        margin-bottom: 0.75rem;
        transition: color 0.2s ease;
      }

      span {
        display: block;
        font-weight: 500;
      }
    }

    @media (max-width: 1200px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .actions-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 768px) {
      .sidebar {
        display: none;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .data-table {
        font-size: 0.875rem;

        th, td {
          padding: 0.5rem;
        }
      }

      .actions-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
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
    const classes: Record<BookingStatus, string> = {
      'PENDING': 'pending',
      'CONFIRMED': 'confirmed',
      'IN_PROGRESS': 'in-progress',
      'COMPLETED': 'completed',
      'CANCELLED': 'cancelled',
      'REFUNDED': 'cancelled'
    };
    return classes[status] || 'pending';
  }

  getStatusLabel(status: BookingStatus): string {
    const labels: Record<BookingStatus, string> = {
      'PENDING': this.i18n.t('status.pending'),
      'CONFIRMED': this.i18n.t('status.confirmed'),
      'IN_PROGRESS': this.i18n.t('status.inProgress'),
      'COMPLETED': this.i18n.t('status.completed'),
      'CANCELLED': this.i18n.t('status.cancelled'),
      'REFUNDED': this.i18n.t('status.refunded')
    };
    return labels[status] || status;
  }

  viewBooking(booking: Booking): void {
    console.log('View booking:', booking);
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
