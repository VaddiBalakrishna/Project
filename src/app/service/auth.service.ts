import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../model/customer.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  msg$ = new BehaviorSubject('');
  user$ = new BehaviorSubject<User>({});

  constructor(private http: HttpClient) { }

  signup(customer: Customer):Observable<any> {
    return  this.http.post( environment.serverUrl + '/customer/add',customer);
  }

  login(token: string): Observable<User> {
    let header = {
      'Authorization' : 'Basic ' + token
    }
     return this.http.get<User>( environment.serverUrl +'/user/login', {headers: header});
  }

}
