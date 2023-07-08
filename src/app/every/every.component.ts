import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.css']
})
export class EveryComponent implements OnInit {

  name: any;
  star: any;
  type: any
  price: any;
  quantity: any;
  img: any;
  id: any;
  arr: any = [];
  constructor(private route: ActivatedRoute, private service: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((par) => {
      this.name = par.get('name');
      this.img = par.get('img');
      this.star = par.get('star');
      this.type = par.get('type');
      this.price = par.get('price');
      this.quantity = par.get('quantity');
      this.id = par.get('id');
      this.arr.push({ name: this.name, star: this.star, type: this.type, price: this.price, quantity: this.quantity, img: this.img, id: this.id });

    })

  }
  countincrease(data: any) {

    for (let i = 0; i < this.service.arr.length; i++) {
    
      if (data == this.service.arr[i].id && this.service.arr[i].quantity<=6) {
       this.quantity++;
        this.service.arr[i].quantity++;
        this.service.methodtoservice();
      }
    }
  }
  countdecrease(data: any) {
    for (let i = 0; i < this.service.arr.length; i++) {
      if (data == this.service.arr[i].id && this.service.arr[i].quantity > 0) {
        this.quantity--;
        this.service.arr[i].quantity++;
        this.service.methodtoservice();
      }
    }
  }
}