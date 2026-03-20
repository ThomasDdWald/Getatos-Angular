import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nService } from '../../core/services/i18n.service';
import { AgencyService } from '../../core/services/agency.service';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
  imports: [RouterModule]
})
export class AgencyComponent implements OnInit {
  agencyStats = { totalBookings: 45, totalRevenue: 125000, commission: 18750, activeClients: 32 };
  constructor(public i18n: I18nService, private agencyService: AgencyService) {}
  ngOnInit(): void {
    this.agencyService.getAgencyStats('agency1').subscribe(stats => { this.agencyStats = stats; });
  }
}
