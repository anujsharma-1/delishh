import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { ApiService } from '../services/api.service';
import { allOrder, item } from '../order_modals';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  localOrderList : any;
  hideRuleContent : boolean[] = [false];
  total : number = 0;
  constructor(private orderService : OrdersService){}
  ngOnInit(): void {
    this.initiateOrders()
  }
  initiateOrders(){
    this.localOrderList = this.orderService.itemArray;
  }

  orderDisplay(e : HTMLElement){
    // console.log(e);
    // e.classList.toggle("hidden");
    // e.remove();
  }

  method(ind:number){
    this.hideRuleContent[ind] = !this.hideRuleContent[ind];
    for(let i=0;i<this.localOrderList.length;i++){
      if(i != ind){
        this.hideRuleContent[i]=false;
      }
    }
    this.total = 0;
    for(let i=0; i<this.localOrderList[ind].orderArray.length; i++){
      console.log(this.localOrderList[ind].orderArray);
      this.total += this.localOrderList[ind].orderArray[i].price * this.localOrderList[ind].orderArray[i].quantity;
    }
  }
}
