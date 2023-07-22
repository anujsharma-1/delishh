import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { order_details } from '../order_modals';
import { OrdersService } from '../services/orders.service';
// import * as Razorpay from 'razorpay';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service : ApiService, private router : Router, private orderService : OrdersService) { }
  cart : any = [];
  total : number = 0;
  bl = false;
  empty = true;
  orderId : any;
  ngOnInit(): void {
    this.initializeCartTab();
  }

  initializeCartTab()
  {
    this.service.prepareItemInCartArray();
    this.cart = this.service.cartarray;
    if(this.cart.length > 0)
      this.empty = false;
    else 
      this.empty = true;
    this.total = this.service.totalCartPrice;
  }
  countdecrease(itemId : any)
  {
    this.service.decreseItemCount(itemId);
    this.total = this.service.totalCartPrice;
    this.cart = this.service.cartarray;
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
    if(this.total<=0)
      this.empty = true;
  }
  Checkoutfunc()
  {
    this.router.navigate(["/myitem/" + this.total + "/"]);
  }

  Payment(){
    alert("Payment is successful!! ");
    this.orderId  = "order_" + Math.random().toString(36).slice(2);
    // let new_order = new order_details();
    // new_order.orderId = this.orderId;
    this.orderService.make_order(this.orderId, this.cart);
    this.service.foodItemArrayRefresh();
    this.initializeCartTab();
    alert("Yay!! your order is booked 🥳🥳. Go to order page for more details.");
    console.log(this.orderService.orders_array);
    this.orderService.prepareAllOrderList();
  }
}
