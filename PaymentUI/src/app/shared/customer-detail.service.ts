import { Injectable } from '@angular/core';
import { CustomerDetail } from './customer-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:61236/api/Customer'
  formData: CustomerDetail = new CustomerDetail();
  list: CustomerDetail[];

  postCustomerDetail() {
    console.log(this.formData);
    return this.http.post(this.baseURL, this.formData);
  }

  putCustomerDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.customerId}`, this.formData);
  }

  deleteCustomerDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as CustomerDetail[]);
  }


}
