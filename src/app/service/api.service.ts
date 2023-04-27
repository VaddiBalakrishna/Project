import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost:8123';

  constructor(private http: HttpClient) { }

  changePassword(username: string, oldPassword: string, newPassword: string) {
    const url = `${this.apiUrl}/change-password/${username}`;
    const body = { oldPassword, newPassword };
    return this.http.put(url, body);
  }
}