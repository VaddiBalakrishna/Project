import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Customer } from 'src/app/model/customer.model';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private customerService:CustomerService,private authService:AuthService) { }

  customerForm: FormGroup;
  username:string;
  customer:Customer;
  ngOnInit(): void {
    this.customerService.getCustomerDetailsInfo(this.username).subscribe({
      next: (data)=>{
        this.customer = data;
      },
      error: (err)=>{}
    });
  }

  searchSubmit(searchCustomer: NgForm){
    this.username= searchCustomer.value.username;
    this.customerService.getCustomerDetailsInfo(this.username).subscribe(data=>{
    this.customer = data;
    });
  }

}
