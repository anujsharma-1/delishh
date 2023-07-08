import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  tabs : string = "";
  cartitem : any;
  constructor(private service : ApiService) { 
  this.tabs = "home";
    
  }
  ngOnInit(): void {}
  cart()
  {
    this.cartitem = this.service.items;
  }
}
