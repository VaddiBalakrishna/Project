import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerDocuments } from '../model/customerdocuments.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerdocumentsService {
  
  constructor(private authService: AuthService, private http: HttpClient) { }

  getAllCustomerDocuments(token: string): Observable<CustomerDocuments[]> {
    let header = {
      'Authorization' : 'Basic' + token
    }
    return this.http.get<CustomerDocuments[]>( environment.serverUrl + '/customerdocuments/all', {headers: header});
  }

  postCustomerDocuments(token:string,customerdocuments:CustomerDocuments):Observable<any>{
    let header = {
      'Authorization' : 'Basic' + token
    }
    return this.http.post<CustomerDocuments>( environment.serverUrl + '/customerdocuments/add',{headers: header});
  }

  postDocument(token:string,formData:FormData){
    let header = {
      'Authorization' : 'Basic' + token
    }
    return this.http.post(environment.serverUrl +'/customerdocuments/uploadFiles',formData,{headers: header});
  }

  send(customerdocuments: CustomerDocuments):Observable<any> {
    return  this.http.post( environment.serverUrl + '/customerdocuments/add/'+ customerdocuments.id,customerdocuments);
  }
  getCustomerDocumentsInfo(token: string): Observable<CustomerDocuments> {
    let header = {
      'Authorization' : 'Basic' + localStorage.getItem('token')
    }
    return this.http.get<CustomerDocuments>(environment.serverUrl + 'customerdocuments/all', {headers: header});
  }
}
