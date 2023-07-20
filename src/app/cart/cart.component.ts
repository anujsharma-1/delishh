import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CheckoutService } from '../services/checkout.service';
import { PaymentHelpService } from '../services/payment-help.service';
// import * as Razorpay from 'razorpay';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service : ApiService, private router : Router,
     private checkout_service : CheckoutService, private paymentHelp : PaymentHelpService) { }
  cart : any = [];
  total : number = 0;
  bl = false;
  empty = true;
  options = {
    "key": "rzp_test_Hkq5RTKWpOOPYv", // Enter the Key ID generated from the Dashboard
    "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_MG56i23RmY4IkK", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response : any){
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    },
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com", 
        "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

  ngOnInit(): void {
    this.initializeCartTab();
  }

  initializeCartTab()
  {
    this.service.prepareItemInCartArray();
    this.cart = this.service.cartarray;
    if(this.cart.length > 0)
      this.empty = false;
    this.total = this.service.totalCartPrice;
  }
  countdecrease(itemId : any)
  {
    this.service.decreseItemCount(itemId);
    this.total = this.service.totalCartPrice;
    this.cart = this.service.cartarray;
    console.log(this.total);
    if(this.service.totalCartPrice<=0)
      this.empty = true;
  }
  countincrease(itemId  : any)
  {
    this.service.increaseItemCount(itemId);
    this.total = this.service.totalCartPrice;
  }
  remove(itemId : any)
  {
    this.service.removeItemFromCart(itemId, -1);
    this.total = this.service.totalCartPrice;
    this.cart = this.service.cartarray;
    debugger;
    if(this.total<=0)
      this.empty = true;
  }
  Checkoutfunc()
  {
    this.router.navigate(["/myitem/" + this.total + "/"]);
  }

  beforePayment(){
    this.paymentHelp.amount = this.total*100;
    this.options.amount = String(this.total*100);
    this.paymentHelp.postmethod();
    // this.payment();
  }
  payment(){
    console.log(this.checkout_service.nativeWindow);
    var rzp1 = new this.checkout_service.nativeWindow.Razorpay(this.options);
    // var rzp2 = new Razorpay(this.options);
    rzp1.on('payment.failed', function (response : any){
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    // e.preventDefault();
  }
}
