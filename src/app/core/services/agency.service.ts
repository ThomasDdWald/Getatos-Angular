import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Agency, DashboardStats } from '../../models/tour.model';
import { MOCK_AGENCIES, MOCK_DASHBOARD_STATS } from '../../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  private agencies: Agency[] = [...MOCK_AGENCIES];

  getAgencies(): Observable<Agency[]> {
    return of(this.agencies).pipe(delay(300));
  }

  getAgencyById(id: string): Observable<Agency | undefined> {
    const agency = this.agencies.find(a => a.id === id);
    return of(agency).pipe(delay(200));
  }

  getActiveAgencies(): Observable<Agency[]> {
    const active = this.agencies.filter(a => a.status === 'ACTIVE');
    return of(active).pipe(delay(300));
  }

  createAgency(agencyData: Partial<Agency>): Observable<Agency> {
    const newAgency: Agency = {
      ...agencyData as Agency,
      id: Date.now().toString(),
      status: 'PENDING',
      totalSales: 0,
      totalCommission: 0,
      createdAt: new Date()
    };
    this.agencies.push(newAgency);
    return of(newAgency).pipe(delay(500));
  }

  updateAgency(id: string, updates: Partial<Agency>): Observable<Agency | undefined> {
    const index = this.agencies.findIndex(a => a.id === id);
    if (index > -1) {
      this.agencies[index] = { ...this.agencies[index], ...updates };
      return of(this.agencies[index]).pipe(delay(500));
    }
    return of(undefined).pipe(delay(500));
  }

  // Dashboard stats
  getDashboardStats(): Observable<DashboardStats> {
    return of(MOCK_DASHBOARD_STATS).pipe(delay(500));
  }

  // Agency specific stats (mock)
  getAgencyStats(agencyId: string): Observable<{
    totalBookings: number;
    totalRevenue: number;
    commission: number;
    activeClients: number;
  }> {
    const stats = {
      totalBookings: 45,
      totalRevenue: 125000,
      commission: 18750,
      activeClients: 32
    };
    return of(stats).pipe(delay(300));
  }
}
