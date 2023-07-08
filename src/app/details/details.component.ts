import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  arr2 : any;
  bl : any;
  constructor(private route : ActivatedRoute, private service : ApiService) { }
  str : any;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((par)=>{
        this.str = par.get('name');
        console.log(this.str);
    })
    this.method();
  }
  method()
  {
    this.bl=0;
    let arr1 = this.service.arr;
    this.arr2 = arr1.filter(items=>items.name.includes(this.str));
    if(this.arr2.length > 0)
    {
      this.bl=1;
    }
    else  
    {
      this.bl=0;
    }
  }

}
