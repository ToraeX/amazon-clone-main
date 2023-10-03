import { Component,OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit{
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

  removeCart(id:any){
    this.userService.removeCart(id).subscribe((data) => {
      if(data){
        alert('item removed from cart');
        this.getcartproducts();
      }
    })
  }

  emptyCart(){
    this.userService.emptyCart().subscribe((data) => {
      if(data){
        alert('item removed from cart');
        this.cartproducts = [];
      }
    })
  }
}
