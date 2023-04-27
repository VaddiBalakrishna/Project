import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/customer.model';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomerComponent implements OnInit {

  constructor(private adminService:AdminService) { }

  customer:Customer[];
  ngOnInit(): void {
    let token = localStorage.getItem('token');
    this.adminService.getAllCustomers(token).subscribe({
      next: (data)=>{
        this.customer = data;
      },
      error: (err)=>{}
    });
  }

}
