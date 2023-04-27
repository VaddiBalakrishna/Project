import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {

  updatedCustomer = {
    companyName: '',
    mobileNo: '',
    email: '',
    panCard: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    const customerId = 1; // Replace with the actual customer ID
    const url = `/api/customer/updateProfile/${customerId}`;
    this.http.put(url, this.updatedCustomer).subscribe(
      () => alert('Profile updated successfully'),
      error => alert('Error updating profile: ' + error.message)
    );
  }

}