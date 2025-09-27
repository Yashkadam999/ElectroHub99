import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private isAdminAuthenticated = false;

  setAuthenticated(value: boolean) {
    this.isAdminAuthenticated = value;
  }

  isAuthenticated(): boolean {
    return this.isAdminAuthenticated;
  }
}
