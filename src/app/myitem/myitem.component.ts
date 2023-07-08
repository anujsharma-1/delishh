import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-myitem',
  templateUrl: './myitem.component.html',
  styleUrls: ['./myitem.component.css']
})
export class MyitemComponent implements OnInit {
  str : any;
  tabs : string = "personal";
  constructor(private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((par)=>{
         this.str = par.get('ord');
        
    })
  }

  form = new FormGroup({
    pdetails : new FormGroup({
      username : new FormControl("", [Validators.required]),
      fname : new FormControl("", [Validators.required]),
      email : new FormControl("", [Validators.required]),
      password : new FormControl("", [Validators.required]),
    }),
    address : new FormGroup({
      street : new FormControl("", [Validators.required]),
      sector : new FormControl("", [Validators.required]),
      city : new FormControl("", [Validators.required]),
    }),
    payment : new FormGroup({
      bank : new FormControl("", [Validators.required]),
      card : new FormControl("", [Validators.required]),
      cvv : new FormControl("", [Validators.required]),
    })
  })

  func()
  {
    if(this.tabs == "personal")
      this.tabs = "add";
    else if(this.tabs == "add")
      this.tabs = "pay";
    
  }
  func1($event : any)
  {
    console.log($event);
  }
}