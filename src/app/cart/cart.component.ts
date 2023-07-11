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

  ngOnInit(): void {
    this.method();
  }
  empty = true;
  method()
  {
    this.cart = this.service.cartarray.filter((item : any)=>item.quantity>0);
    this.service.cartarray = this.cart;
    if(this.cart.length==0)
      this.empty=true;
    else this.empty = false;
    for(let i=0;i<this.cart.length;i++)
    {
      this.total = this.total + this.cart[i].price*this.cart[i].quantity;
    }
 //   document.getElementById("id1")?.innerHTML = this.cart.length;
  }
  countdecrease(data : any)
  {
    this.total = 0;
    for(let i=0;i<this.cart.length;i++)
    {
      if(data == this.cart[i].id && this.cart[i].quantity>0)
      {
        this.cart[i].quantity--;
        this.service.methodtoservice();
      }
      this.total = this.total + this.cart[i].price*this.cart[i].quantity;
      if(this.cart[i].quantity <1)
      {
        this.remove(data);
      }
    }
    if(this.total<=0)
      this.empty = true;
  }
  countincrease(data : any)
  {
    this.total = 0;
    for(let i=0;i<this.cart.length;i++)
    {
      if(data == this.cart[i].id && this.cart[i].quantity<=6)
      {
        this.cart[i].quantity++;
        this.service.methodtoservice();
      }
      this.total = this.total + this.cart[i].price*this.cart[i].quantity;
    }
  }
  remove(data : any)
  {
    this.cart = this.cart.filter((item : any)=>item.id!=data);
    for(let i=0;i<this.service.arr.length;i++)
    {
      if(this.service.arr[i].id == data)
      {
        this.service.arr[i].quantity = 0;
        this.service.methodtoservice();
      }
    }
    this.cart = this.service.cartarray.filter((item : any)=>item.id!=data);
    this.total = 0;

    for(let i=0;i<this.cart.length;i++)
    {
      this.total = this.total + this.cart[i].price*this.cart[i].quantity;
    }
    if(this.total<=0)
      this.empty = true;
  }
  Checkoutfunc()
  {
    this.router.navigate(["/myitem/" + this.total + "/"]);
  }
}
