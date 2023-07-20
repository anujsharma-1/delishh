import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() localarray : any;
  temp : any = [];
  cartarray : any;
  cnt : any;
  constructor(private service : ApiService, private route : ActivatedRoute, private router : Router) {
  }
  
  ngOnInit(): void {}
  countdecrease(itemId : any)
  {
    this.service.decreseItemCount(itemId);
  }
  
  countincrease(itemId : any)
  {
    this.service.increaseItemCount(itemId);
  }
  routerfunc(data  : any)
  {
    // console.log(JSON.parse(data));
    // console.log(JSON.stringify(data));
    this.router.navigate(['/every/' + data.id]);
  }
}