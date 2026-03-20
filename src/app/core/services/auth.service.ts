import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, delay } from 'rxjs';
import { AuthState, User, UserRole } from '../../models/tour.model';
import { MOCK_USERS } from '../../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<AuthState>({
    user: null,
    isAuthenticated: false,
    token: null
  });

  authState$ = this.authState.asObservable();

  constructor() {
    this.checkStoredAuth();
  }

  private checkStoredAuth(): void {
    const stored = localStorage.getItem('getatos_auth');
    if (stored) {
      try {
        const state = JSON.parse(stored);
        this.authState.next(state);
      } catch {
        localStorage.removeItem('getatos_auth');
      }
    }
  }

  login(email: string, password: string): Observable<User | null> {
    // Mock authentication - in production, this would call an API
    const user = MOCK_USERS.find(u => u.email === email);
    
    return of(user || null).pipe(delay(800));
  }

  authenticate(user: User): void {
    const state: AuthState = {
      user,
      isAuthenticated: true,
      token: 'mock-jwt-token-' + Date.now()
    };
    this.authState.next(state);
    localStorage.setItem('getatos_auth', JSON.stringify(state));
  }

  logout(): void {
    const state: AuthState = {
      user: null,
      isAuthenticated: false,
      token: null
    };
    this.authState.next(state);
    localStorage.removeItem('getatos_auth');
  }

  getCurrentUser(): User | null {
    return this.authState.getValue().user;
  }

  isAuthenticated(): boolean {
    return this.authState.getValue().isAuthenticated;
  }

  hasRole(roles: UserRole[]): boolean {
    const user = this.getCurrentUser();
    return user ? roles.includes(user.role) : false;
  }

  // Demo login functions
  loginAsAdmin(): void {
    const admin = MOCK_USERS.find(u => u.role === 'ADMIN');
    if (admin) this.authenticate(admin);
  }

  loginAsStaff(): void {
    const staff = MOCK_USERS.find(u => u.role === 'STAFF');
    if (staff) this.authenticate(staff);
  }

  loginAsCustomer(): void {
    const customer = MOCK_USERS.find(u => u.role === 'CUSTOMER');
    if (customer) this.authenticate(customer);
  }

  loginAsAgency(): void {
    const agency = MOCK_USERS.find(u => u.role === 'AGENCY');
    if (agency) this.authenticate(agency);
  }
}
