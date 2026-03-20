import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  stats = {
    totalRevenue: 245000,
    totalBookings: 156,
    activeCustomers: 89,
    averageRating: 4.8,
    revenueChange: 12,
    bookingsChange: 8,
    customerChange: 15
  };
  
  recentBookings = [
    {
      id: '1',
      bookingReference: 'GS-2024-001',
      tour: { name: 'Serengeti Big Five Safari' },
      startDate: new Date('2024-04-15'),
      status: 'CONFIRMED',
      totalPrice: 2999,
      participants: [{ firstName: 'John', lastName: 'Smith', email: 'john@example.com' }]
    },
    {
      id: '2',
      bookingReference: 'GS-2024-002',
      tour: { name: 'Kilimanjaro Summit Trek' },
      startDate: new Date('2024-04-20'),
      status: 'PENDING',
      totalPrice: 4200,
      participants: [{ firstName: 'Maria', lastName: 'Garcia', email: 'maria@example.com' }]
    },
    {
      id: '3',
      bookingReference: 'GS-2024-003',
      tour: { name: 'Zanzibar Beach Paradise' },
      startDate: new Date('2024-04-22'),
      status: 'CONFIRMED',
      totalPrice: 1499,
      participants: [{ firstName: 'David', lastName: 'Brown', email: 'david@example.com' }]
    },
    {
      id: '4',
      bookingReference: 'GS-2024-004',
      tour: { name: 'Ngorongoro Crater Safari' },
      startDate: new Date('2024-04-25'),
      status: 'COMPLETED',
      totalPrice: 1899,
      participants: [{ firstName: 'Sarah', lastName: 'Wilson', email: 'sarah@example.com' }]
    },
    {
      id: '5',
      bookingReference: 'GS-2024-005',
      tour: { name: 'Serengeti & Zanzibar Combo' },
      startDate: new Date('2024-05-01'),
      status: 'PENDING',
      totalPrice: 4299,
      participants: [{ firstName: 'Michael', lastName: 'Davis', email: 'michael@example.com' }]
    }
  ];
  pendingBookings = 2;
  currentDate = new Date();

  constructor() {}

  ngOnInit(): void {}

  loadDashboardData(): void {}

  getStatusClass(status: string): string { 
    const classes: Record<string, string> = {
      'PENDING': 'pending',
      'CONFIRMED': 'confirmed',
      'IN_PROGRESS': 'in-progress',
      'COMPLETED': 'completed',
      'CANCELLED': 'cancelled'
    };
    return classes[status] || 'pending';
  }

  getStatusLabel(status: string): string { return status; }

  confirmBooking(booking: any): void {}
  cancelBooking(booking: any): void {}
}
