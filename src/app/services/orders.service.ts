import { Injectable } from '@angular/core';
import { order_details, item_details } from '../order_modals';
import { ApiService } from './api.service';
import { allOrder } from '../order_modals';
import { item } from '../order_modals';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private service : ApiService) { }
  
  orders_array : order_details[] =[];
  itemArray : allOrder[]= [];
  make_order(orderId : any, cart : any){
    console.log(cart);
    let item_array : item_details[] = [];
    for(let i=0; i<cart.length; i++){
      let new_item = new item_details(String(cart[i].id), cart[i].quantity);
      item_array.push(new_item);
    }
    let order = new order_details (orderId, item_array)
    this.orders_array.push(order);
    console.log("orders-details : ", this.orders_array);
  }

  prepareAllOrderList(){ 
    let order = this.orders_array;
    console.log(order); 
    let id;
    this.itemArray = [];
    for(let localOrder=0; localOrder<order.length; localOrder++){
      let new_items  : item[] = [];
      for(let itemInOrder=0; itemInOrder<order[localOrder].items?.length; itemInOrder++){
        id = order[localOrder].items[itemInOrder].itemId;
        let index = this.service.findIndexFromId(id);
        let arr = Object.assign({}, this.service.arr[index]);
        arr.quantity = order[localOrder].items[itemInOrder].quantity;
        new_items.push(arr);
      }
      this.itemArray.push({orderId : order[localOrder].orderId, orderArray : new_items});
    }
    console.log(this.itemArray);
  }
}