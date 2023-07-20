import { Element } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() {
  }
  totalCartItems : number = 0;
  totalCartPrice : number = 0;
arr = [
  {name : "Kadai paneer", img : "https://storyofspices.in/wp-content/uploads/2022/04/kadai_paneer_recipe_story_of_spices-01-1-scaled.jpeg", star : 4.2, type : 0, id : Math.random(), price : 280, quantity : 0},
  {name : "Daal makhni", img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0bFf_KHfCXNaEJ0F-hezmvAZVagrNjtz1tEA3tAdgvG_ZCoAGt6DwEtTNREJ2UpgztA&usqp=CAU", star : 3.5, type : 0, id : Math.random(), price : 170, quantity : 0},
  {name : "Soya chaap", img : "https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2022/03/tandoori-soya-chaap_1631702105.jpeg", star : 3.9, type : 0, id : Math.random(), price : 150, quantity : 0},

  {name : "Roasted chicken", img : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/fennel-roasted-chicken-and-peppers-1639692168.jpg", star : 3.4, type : 1, id : Math.random(), price : 150, quantity : 0},
  {name : "Grilled fish", img : "https://www.thespruceeats.com/thmb/CwVsWt1O6yG88wpWpLnRavW9L3E=/3000x1687/smart/filters:no_upscale()/thai-grilled-whole-fish-with-coriander-chili-sauce-3217485-Hero_01-0bae03c92a794a97959408ab726fc797.jpg", star : 4.2, type : 1, id : Math.random(), price : 789, quantity : 0},
  {name : "Fish biryani", img : "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/08/fish-biryani.jpg", star : 5.0, type : 1, id : Math.random(), price : 195, quantity : 0},
  
  {name : "Green mojito", img : "https://alhallabtr.com/wp-content/uploads/2020/12/YesilElmaMojito_tn.jpg", star : 3.4, type : 2, id : Math.random(), price : 148, quantity : 0},
  {name : "Fruit beer", img : "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/30/16/fruit.jpg?width=1200", star : 4.7, type : 2, id : Math.random(), price : 120, quantity : 0},
  {name : "Coke", img : "https://www.eatthis.com/wp-content/uploads/sites/4/2021/06/soda-2.jpg?quality=82&strip=1", star : 2.7, type : 2, id : Math.random(), price : 79, quantity : 0},
  
]
  cartarray : any = [];

  methodtoservice(){}
  
  decreseItemCount(itemId : any){
    let index = this.findIndexFromId(itemId);
    if(this.arr[index].quantity  > 1){
      this.arr[index].quantity--;
      this.prepareItemInCartArray();
      this.totalCartPrice -= this.arr[index].price;
    }
    else if(this.arr[index].quantity == 1){ 
      this.removeItemFromCart(undefined, index);
    }
  }

  increaseItemCount(itemId : any){
    let index = this.findIndexFromId(itemId);
    if(this.arr[index].quantity < 6){  
      this.arr[index].quantity++;
      this.prepareItemInCartArray();
      this.totalCartPrice += this.arr[index].price;
    }
  }

  removeItemFromCart(itemId : any, index : number){
    if(index == -1)
      index = this.findIndexFromId(itemId);
    this.arr[index].quantity = 0;
    this.prepareItemInCartArray();
    this.calculateTotalItemPrice();
  }

  prepareItemInCartArray()
  {
    this.cartarray = this.arr.filter(item=>item.quantity>0);
    this.totalCartItems = this.cartarray.length; 
  }

  calculateTotalItemPrice(){
    this.totalCartPrice = 0;
    if(this.cartarray.length > 0){
      this.cartarray.forEach((element : any) => {
        this.totalCartPrice += element?.quantity * element?.price;
      });
    }
  }

  findIndexFromId(itemId : any){
    for (let i=0; i<this.arr.length; i++){
      if(this.arr[i].id == itemId)
        return i;
    }
    return -1;
  }
}