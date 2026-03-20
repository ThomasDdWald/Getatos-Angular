import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'tours',
    loadComponent: () => import('./features/tours/tours.component').then(m => m.ToursComponent)
  },
  {
    path: 'backoffice',
    loadComponent: () => import('./features/backoffice/backoffice.component').then(m => m.BackofficeComponent)
  },
  {
    path: 'agency',
    loadComponent: () => import('./features/agency/agency.component').then(m => m.AgencyComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login.component').then(m => m.LoginComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
