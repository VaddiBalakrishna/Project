import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomerInfo(token: string): Observable<Customer> {
    let header = {
      'Authorization' : 'Basic ' + token
    }
    return this.http.get<Customer>(environment.serverUrl + '/customer/all', {headers: header});
  }

  getCustomerDetailsInfo(username:string): Observable<Customer> {
    /*let header = {
      'Authorization' : 'Basic ' + token
    }*/
    return this.http.get<Customer>(environment.serverUrl + '/customer/custdetails/'+username);
  }
}
