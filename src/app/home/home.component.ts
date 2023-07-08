import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  constructor(private service : ApiService, private router : Router) { }
  txt : any;
  type : string  = "all";
  array : any;
  text : string = "string";
  bl = true;
  local = this.service.arr;
  method()
  {  
    this.service.text = "bunty chela";
    this.array =  this.service.arr;
    if(this.type == "veg")
      this.local = this.array.filter((item : any)=>item.type == 0);
    if(this.type == "nonveg")
      this.local =  this.array.filter((item : any)=>item.type == 1);
    if(this.type == "drinks")
      this.local =  this.array.filter((item : any)=>item.type == 2);
    if(this.type == "all")
      this.local =  this.array;
    this.service.text = this.text
  }
  func(data : any)
  {
    this.router.navigate(["/details/" + data + "/"]); 
  }
}