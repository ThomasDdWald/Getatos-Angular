import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ToursComponent } from './features/tours/tours.component';
import { BackofficeComponent } from './features/backoffice/backoffice.component';
import { AgencyComponent } from './features/agency/agency.component';
import { LoginComponent } from './features/auth/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tours', component: ToursComponent },
  { path: 'backoffice', component: BackofficeComponent },
  { path: 'agency', component: AgencyComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];
