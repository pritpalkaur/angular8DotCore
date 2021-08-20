import { Component, OnInit } from '@angular/core';
import { CustomerDetailService } from 'src/app/shared/customer-detail.service';
import { NgForm } from '@angular/forms';
import { CustomerDetail } from 'src/app/shared/customer-detail.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html'
  ,
  styles: [
  ]
})
export class CustomerFormComponent implements OnInit {

    constructor(public service: CustomerDetailService,
      private toastr: ToastrService) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(form: NgForm) {
      if (this.service.formData.customerId == 0)
        this.insertRecord(form);
      else
        this.updateRecord(form);
    }
  
    insertRecord(form: NgForm) {
      this.service.postCustomerDetail().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Submitted successfully', 'Customer Detail Register')
        },
        err => { console.log(err); }
      );
    }
  
    updateRecord(form: NgForm) {
      this.service.putCustomerDetail().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.info('Updated successfully', 'Customer Detail Register')
        },
        err => { console.log(err); }
      );
    }
  
  
    resetForm(form: NgForm) {
      form.form.reset();
      this.service.formData = new CustomerDetail();
    }
  
  }
