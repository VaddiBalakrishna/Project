import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    const oldPassword = this.changePasswordForm.value.oldPassword;
    const newPassword = this.changePasswordForm.value.newPassword;
    const username = 'myusername'; // replace with the actual username

    this.apiService.changePassword(username, oldPassword, newPassword).subscribe(
      response => {
       // this.successMessage = response;
        this.errorMessage = null;
        this.changePasswordForm.reset();
      },
      error => {
        this.successMessage = null;
        this.errorMessage = error.error;
      }
    );
  }
}