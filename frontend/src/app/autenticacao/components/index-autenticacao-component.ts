import { Component, OnDestroy, OnInit } from "@angular/core";
import * as moment from "moment";

@Component({
  selector:"app-autenticacao",
  styleUrls:['./index-autenticacao-component.css'], 
  templateUrl:"./index-autenticacao-component.html"
})


export  class IndexAuntenticacoComponent  implements OnDestroy  , OnInit {
  actualYears:any = moment().format("YYYY"); 
 
  ngOnInit(): void {
     
  }
  ngOnDestroy(): void {
    
  } 
  
}
    

