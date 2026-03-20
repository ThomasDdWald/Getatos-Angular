import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss']
})
export class AgencyComponent implements OnInit {
  agencyStats = { totalBookings: 45, totalRevenue: 125000, commission: 18750, activeClients: 32 };
  constructor() {}
  ngOnInit(): void {}
}
