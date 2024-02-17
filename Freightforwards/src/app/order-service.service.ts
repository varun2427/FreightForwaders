import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  order: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  createOrder(order: { name: any; email: any; phone: any; amount: any; }): Observable<any> {
    return this.http.post("http://localhost:8085/demo/createOrder", {
      firstName: order.name,
      lastName: order.name,
      email: order.email,
      phoneNumber: order.phone,
      amount: order.amount
    }, this.httpOptions);
  }
}