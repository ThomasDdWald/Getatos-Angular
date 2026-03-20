import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  stats: any = null;
  recentBookings: any[] = [];
  pendingBookings = 0;
  currentDate = new Date();

  constructor() {}

  ngOnInit(): void {}

  loadDashboardData(): void {}
  getStatusClass(status: string): string { return 'pending'; }
  getStatusLabel(status: string): string { return status; }
  confirmBooking(booking: any): void {}
  cancelBooking(booking: any): void {}
}
