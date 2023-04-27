import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerDocuments } from 'src/app/model/customerdocuments.model';
import { AuthService } from 'src/app/service/auth.service';
import { CustomerdocumentsService } from 'src/app/service/customerdocuments.service';

@Component({
  selector: 'app-customer-documents',
  templateUrl: './customer-documents.component.html',
  styleUrls: ['./customer-documents.component.css']
})
export class CustomerDocumentsComponent implements OnInit {
  
  customerDocumentsForm: FormGroup;
  customerDocuments: CustomerDocuments;
  msg: string;
  file:any;

  constructor(public router:Router, private authService: AuthService, private customerDocumentsService: CustomerdocumentsService) {} 

    getFile(event:any){
      this.file=event.target.files[0];
      console.log("file",this.file);
    }

  

  ngOnInit(): void {
    this.customerDocumentsForm = new FormGroup({
      aadharNumber : new FormControl("",[Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)]),
      panNumber : new FormControl("",[Validators.required]),
    });
  }
  onSendApplication()
  {
    this.customerDocuments = {
      aadharNumber : this.customerDocumentsForm.value.aadharNumber,
      panNumber : this.customerDocumentsForm.value.panNumber,
      customer : {
        id : this.customerDocumentsForm.value.id,
      }

    };

    let token = localStorage.getItem('token');
    this.customerDocumentsService.postCustomerDocuments(token,this.customerDocuments).subscribe({
      next: (data)=>{
        this.authService.msg$.next('Customer Documents Uploaded!!!')
      },
      error: (err)=>{

      }
    });

    let formData = new FormData();
    formData.set('file',this.file);

    this.customerDocumentsService.postDocument(token,formData).subscribe({
      next: (data)=>{
        console.log(this.file)
        this.authService.msg$.next('Claim Submitted!!')
      },
      error: (err)=>{
        
      }
    });
   
  }

  searchSubmit(searchCustomer: NgForm){
   // this.id= searchCustomer.value.username;
   // this.customerDocumentsService.getCustomerDetailsInfo(this.username).subscribe(data=>{
   // this.customer = data;
   // });
  }

}


