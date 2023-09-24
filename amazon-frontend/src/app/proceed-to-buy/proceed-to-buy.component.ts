import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-proceed-to-buy',
  templateUrl: './proceed-to-buy.component.html',
  styleUrls: ['./proceed-to-buy.component.css']
})


export class ProceedToBuyComponent implements OnInit {
  cartproducts:any = [];
  total : any = 0;
  constructor(private seller : SellerService ,private userService:UserServiceService){

  }
  ngOnInit(): void {
    this.getcartproducts();
  }

  getcartproducts(){
    this.seller.getcartproducts().subscribe(data => {
      if(data) {
        let finalTotal = 0;
        this.cartproducts = data;
        this.cartproducts.forEach(element => {
          if(element.hasOwnProperty('price')){
            finalTotal+=(element.price * element.quantity);  
          }
        });
        this.total = finalTotal;
        
      }
    })
  }
}
