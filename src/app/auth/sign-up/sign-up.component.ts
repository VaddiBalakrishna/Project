import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/model/customer.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  customer: Customer;
  msg: string;

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      companyName: new FormControl(''),
      email: new FormControl(''),
      mobileNo: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
      password: new FormControl('', [Validators.required,Validators.minLength(5), Validators.maxLength(15), Validators.pattern(/^[a-zA-Z0-9@%_]+$/)]),
      repassword: new FormControl('', [Validators.required]),
      panCard: new FormControl(''),
    });
  }


  onSignUp(){
    this.customer = {
      name: this.signUpForm.value.name,
      user: {
        username: this.signUpForm.value.username,
        password: this.signUpForm.value.password
      },
      companyName: this.signUpForm.value.companyName,
      mobileNo: this.signUpForm.value.mobileNo,
      email: this.signUpForm.value.email,
      panCard: this.signUpForm.value.panCard,
    };
    /* password is == repassword */
    let repassword = this.signUpForm.value.repassword;
    if(! (this.signUpForm.value.password == repassword) ){
      this.msg = 'Passwords do not match';
    }
    else{
      this.authService.signup(this.customer).subscribe({
        next: (data)=>{
          //naviagate the User to Login
          this.authService.msg$.next('SignUp Success!!')
          this.router.navigateByUrl('/');
        },
        error: (err)=>{
          //display error message
        }
      });
    }
  }

}
