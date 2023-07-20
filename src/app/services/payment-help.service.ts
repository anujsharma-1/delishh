import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentHelpService {
  order_id : any;
  amount : any
  constructor(private http : HttpClient) { }
  postmethod(){
    const options = {
      method: 'POST',
      headers: {
        Authorization: 'Basic cnpwX3Rlc3RfSGtxNVJUS1dwT09QWXY6MGZ2emN5YXF3TDQ3Q1dyYTd1NVZBZTY2'
      },
      body: '{"amount":2500,"currency":"INR","receipt":"qwsaq1","partial_payment":true,"first_payment_min_amount":230}'
    };
    debugger;
    fetch('https://api.razorpay.com/v1/orders', options)
      .then(response =>{
        console.log(response);
         response.json()})
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
}