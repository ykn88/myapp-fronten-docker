import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prods:any

  constructor(private service: DataService) { }

  ngOnInit() {
   
     let observe = this.service.Select();
     observe.subscribe((result)=>{
       console.log(result);
       this.prods = result;
     })

  }

}
