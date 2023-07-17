import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  searchedResults : any = [];
  isItemAvailable : any;
  constructor(private route : ActivatedRoute, private service : ApiService) { }
  searchedString : any;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((par)=>{
        this.searchedString = par.get('name');
    })
    this.searchItem();
  }
  searchItem()
  {
    // debugger;
    this.isItemAvailable=0;
    let localItem = "";
    this.searchedResults = this.service.arr.filter((items)=>{
      localItem = items.name.toLowerCase();
      this.searchedString = this.searchedString.toLowerCase(); 
      return localItem.includes(this.searchedString)
    });
    this.searchedResults.length > 0 ? this.isItemAvailable = 1 : this.isItemAvailable = 0;
  }
}
