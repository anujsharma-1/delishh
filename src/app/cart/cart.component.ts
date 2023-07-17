import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private service : ApiService, private router : Router) { }
  cart : any = [];
  total : number = 0;
  bl = false;
  empty = true;

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
    this.service.removeItemFromCart(itemId);
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
}
