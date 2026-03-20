import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../core/services/i18n.service';
import { AgencyService } from '../../core/services/agency.service';

@Component({
  selector: 'app-agency',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="agency-wrapper">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <h3><i class="fas fa-handshake"></i> Agency Portal</h3>
          <p>Partner Dashboard</p>
        </div>
        <nav class="sidebar-nav">
          <a routerLink="/agency" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <i class="fas fa-tachometer-alt"></i> {{ i18n.t('agency.dashboard') }}
          </a>
          <a routerLink="/agency/bookings" routerLinkActive="active">
            <i class="fas fa-calendar-check"></i> {{ i18n.t('agency.bookings') }}
          </a>
          <a routerLink="/agency/quick-book" routerLinkActive="active">
            <i class="fas fa-bolt"></i> {{ i18n.t('agency.quickBook') }}
          </a>
          <a routerLink="/agency/quotes" routerLinkActive="active">
            <i class="fas fa-file-invoice-dollar"></i> {{ i18n.t('agency.quotes') }}
          </a>
          <a routerLink="/agency/clients" routerLinkActive="active">
            <i class="fas fa-users"></i> {{ i18n.t('agency.clients') }}
          </a>
          <a routerLink="/agency/resources" routerLinkActive="active">
            <i class="fas fa-folder-open"></i> {{ i18n.t('agency.resources') }}
          </a>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="main-content">
        <!-- Header -->
        <header class="content-header">
          <div class="welcome-section">
            <h2>{{ i18n.t('agency.dashboard') }}</h2>
            <p>Welcome back! Here's your sales overview</p>
          </div>
          <div class="header-actions">
            <button class="btn btn-primary">
              <i class="fas fa-plus"></i> New Booking
            </button>
          </div>
        </header>

        <!-- Stats Cards -->
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon sales">
              <i class="fas fa-chart-line"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">{{ i18n.t('agency.totalSales') }}</span>
              <span class="stat-value">\${{ agencyStats.totalRevenue | number }}</span>
              <span class="stat-period">This Year</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon commission">
              <i class="fas fa-percentage"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">{{ i18n.t('agency.totalCommission') }}</span>
              <span class="stat-value">\${{ agencyStats.commission | number }}</span>
              <span class="stat-period">Available for payout</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon bookings">
              <i class="fas fa-calendar"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">Total Bookings</span>
              <span class="stat-value">{{ agencyStats.totalBookings }}</span>
              <span class="stat-period">All time</span>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon clients">
              <i class="fas fa-user-friends"></i>
            </div>
            <div class="stat-info">
              <span class="stat-label">Active Clients</span>
              <span class="stat-value">{{ agencyStats.activeClients }}</span>
              <span class="stat-period">This year</span>
            </div>
          </div>
        </div>

        <!-- Commission Info -->
        <div class="commission-banner">
          <div class="commission-info">
            <div class="commission-rate">
              <span class="rate-label">Your Commission Rate</span>
              <span class="rate-value">15%</span>
            </div>
            <div class="commission-details">
              <p>Earn 15% commission on every booking you generate. Commission is paid monthly via bank transfer.</p>
            </div>
          </div>
          <div class="commission-actions">
            <a routerLink="/agency/quotes" class="btn btn-secondary">
              <i class="fas fa-file-invoice-dollar"></i> Generate Quote
            </a>
          </div>
        </div>

        <!-- Quick Tools -->
        <div class="quick-tools">
          <h3>Quick Tools</h3>
          <div class="tools-grid">
            <div class="tool-card">
              <div class="tool-icon">
                <i class="fas fa-bolt"></i>
              </div>
              <h4>{{ i18n.t('agency.quickBook') }}</h4>
              <p>Create a booking for your client in minutes</p>
              <a routerLink="/agency/quick-book" class="tool-link">
                Start Booking <i class="fas fa-arrow-right"></i>
              </a>
            </div>

            <div class="tool-card">
              <div class="tool-icon">
                <i class="fas fa-file-invoice-dollar"></i>
              </div>
              <h4>{{ i18n.t('agency.quotes') }}</h4>
              <p>Generate custom quotes for your clients</p>
              <a routerLink="/agency/quotes" class="tool-link">
                Create Quote <i class="fas fa-arrow-right"></i>
              </a>
            </div>

            <div class="tool-card">
              <div class="tool-icon">
                <i class="fas fa-download"></i>
              </div>
              <h4>{{ i18n.t('agency.resources') }}</h4>
              <p>Download brochures, images, and guides</p>
              <a routerLink="/agency/resources" class="tool-link">
                Browse Resources <i class="fas fa-arrow-right"></i>
              </a>
            </div>

            <div class="tool-card">
              <div class="tool-icon">
                <i class="fas fa-headset"></i>
              </div>
              <h4>Support</h4>
              <p>Contact our dedicated agency support team</p>
              <a href="mailto:agencies@getatos-safari.com" class="tool-link">
                Get Support <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="recent-activity">
          <h3>Recent Activity</h3>
          <div class="activity-list">
            <div class="activity-item">
              <div class="activity-icon booking">
                <i class="fas fa-calendar-check"></i>
              </div>
              <div class="activity-content">
                <p><strong>New Booking</strong> - Mr. Schmidt booked Serengeti Safari</p>
                <span class="activity-time">2 hours ago</span>
              </div>
              <span class="activity-amount">\$2,999</span>
            </div>

            <div class="activity-item">
              <div class="activity-icon quote">
                <i class="fas fa-file-invoice"></i>
              </div>
              <div class="activity-content">
                <p><strong>Quote Sent</strong> - Safari Adventures UK requested a quote</p>
                <span class="activity-time">5 hours ago</span>
              </div>
            </div>

            <div class="activity-item">
              <div class="activity-icon payment">
                <i class="fas fa-dollar-sign"></i>
              </div>
              <div class="activity-content">
                <p><strong>Commission Paid</strong> - \$450 transferred to your account</p>
                <span class="activity-time">Yesterday</span>
              </div>
            </div>

            <div class="activity-item">
              <div class="activity-icon client">
                <i class="fas fa-user-plus"></i>
              </div>
              <div class="activity-content">
                <p><strong>New Client</strong> - Anna Meyer registered through your link</p>
                <span class="activity-time">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: [`
    .agency-wrapper {
      display: flex;
      min-height: calc(100vh - 80px);
      background: #F5F5F0;
    }

    /* Sidebar */
    .sidebar {
      width: 280px;
      background: linear-gradient(180deg, #1A5F4A 0%, #134436 100%);
      color: white;
      flex-shrink: 0;
    }

    .sidebar-header {
      padding: 2rem 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);

      h3 {
        color: white;
        font-size: 1.25rem;
        margin: 0 0 0.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.875rem;
        margin: 0;
      }
    }

    .sidebar-nav {
      padding: 1rem 0;

      a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.875rem 1.5rem;
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        transition: all 0.2s ease;

        &:hover, &.active {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        &.active {
          background: rgba(255, 255, 255, 0.15);
          border-left: 3px solid #D4A853;
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

      .welcome-section {
        h2 {
          margin: 0 0 0.25rem;
        }

        p {
          color: #718096;
          margin: 0;
        }
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
      border-radius: 16px;
      padding: 1.5rem;
      display: flex;
      gap: 1rem;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-4px);
      }
    }

    .stat-icon {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;

      &.sales { background: rgba(26, 95, 74, 0.1); color: #1A5F4A; }
      &.commission { background: rgba(212, 168, 83, 0.1); color: #D4A853; }
      &.bookings { background: rgba(232, 93, 4, 0.1); color: #E85D04; }
      &.clients { background: rgba(16, 185, 129, 0.1); color: #10B981; }
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

      .stat-period {
        font-size: 0.75rem;
        color: #A0AEC0;
      }
    }

    /* Commission Banner */
    .commission-banner {
      background: linear-gradient(135deg, #1A5F4A 0%, #134436 100%);
      border-radius: 16px;
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      color: white;
    }

    .commission-info {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .commission-rate {
      text-align: center;
      padding: 1rem 2rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 12px;

      .rate-label {
        display: block;
        font-size: 0.875rem;
        opacity: 0.8;
        margin-bottom: 0.25rem;
      }

      .rate-value {
        font-size: 2.5rem;
        font-weight: 700;
        color: #D4A853;
      }
    }

    .commission-details {
      p {
        color: rgba(255, 255, 255, 0.8);
        margin: 0;
        max-width: 400px;
      }
    }

    /* Quick Tools */
    .quick-tools {
      margin-bottom: 2rem;

      h3 {
        margin-bottom: 1rem;
      }
    }

    .tools-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
    }

    .tool-card {
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      text-align: center;
      transition: all 0.2s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      }

      .tool-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 1rem;
        background: linear-gradient(135deg, rgba(26, 95, 74, 0.1) 0%, rgba(212, 168, 83, 0.1) 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          font-size: 1.5rem;
          color: #1A5F4A;
        }
      }

      h4 {
        margin: 0 0 0.5rem;
      }

      p {
        font-size: 0.875rem;
        color: #718096;
        margin-bottom: 1rem;
      }

      .tool-link {
        font-weight: 600;
        color: #1A5F4A;
        
        &:hover {
          color: #134436;
        }
      }
    }

    /* Recent Activity */
    .recent-activity {
      h3 {
        margin-bottom: 1rem;
      }
    }

    .activity-list {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    }

    .activity-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid #E2E8F0;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background: #F7FAFC;
      }
    }

    .activity-icon {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;

      &.booking { background: rgba(26, 95, 74, 0.1); color: #1A5F4A; }
      &.quote { background: rgba(212, 168, 83, 0.1); color: #D4A853; }
      &.payment { background: rgba(16, 185, 129, 0.1); color: #10B981; }
      &.client { background: rgba(232, 93, 4, 0.1); color: #E85D04; }
    }

    .activity-content {
      flex: 1;

      p {
        margin: 0;
        font-size: 0.9rem;
      }

      .activity-time {
        font-size: 0.8rem;
        color: #718096;
      }
    }

    .activity-amount {
      font-weight: 600;
      color: #10B981;
    }

    @media (max-width: 1200px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .tools-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .commission-banner {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
      }

      .commission-info {
        flex-direction: column;
      }
    }

    @media (max-width: 768px) {
      .sidebar {
        display: none;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .tools-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AgencyComponent implements OnInit {
  agencyStats = {
    totalBookings: 45,
    totalRevenue: 125000,
    commission: 18750,
    activeClients: 32
  };

  constructor(
    public i18n: I18nService,
    private agencyService: AgencyService
  ) {}

  ngOnInit(): void {
    this.agencyService.getAgencyStats('agency1').subscribe(stats => {
      this.agencyStats = stats;
    });
  }
}
