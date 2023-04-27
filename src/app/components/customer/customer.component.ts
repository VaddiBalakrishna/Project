import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

customer:Customer;
user: any;
 
  constructor(private authService: AuthService,private customerService:CustomerService) { }
 
  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.customerService.getCustomerInfo(token).subscribe({
      next: (data)=>{
        this.customer = data;
      },
      error: (err)=>{}
    });
    
  }

}
