import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../model/admin.model';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http: HttpClient) { }

  getAdminInfo(token: string): Observable<Admin> {
    let header = {
      'Authorization' : 'Basic ' + token
    }
    return this.http.get<Admin>(environment.serverUrl + '/admin/details', {headers: header});
  }

  getAllCustomers(token: string):Observable<Customer[]>{
    let header = {
      'Authorization' : 'Basic ' + token
    }
    return this.http.get<Customer[]>(environment.serverUrl + '/customer/all', {headers: header});
  }


  public getDocId(loanId:number):Observable<number>{
    return this.http.get<number>(environment.serverUrl + '/claim/getDocId/'+loanId);
  }

  public downloadFile(docId:number){
    return this.http.get(environment.serverUrl + '/loan/document/'+docId,{observe:'response',responseType:'blob'});
  }


 

}
