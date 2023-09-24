import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { UserServiceService } from '../services/user-service.service';
import { Conditional } from '@angular/compiler';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() cartObject;
  userLoggedIn:any = false;
  user :any;
  cartproducts: any =[];
  total : any = 0;
  constructor(private router:Router ,private seller:SellerService,private userService :UserServiceService){

  }

  ngOnInit(): void {
   // this.getcartproducts()
    //console.log(this.userLoggedIn)  
     this.user = JSON.parse(localStorage.getItem('userData'));
    
    if(this.user){
      this.userLoggedIn = true;
    }

  }

  logout(){
    localStorage.clear();
    setTimeout(()=>{
      this.router.navigate(['register'])
    },1000)
    
    
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

  getCartData(){
    this.getcartproducts();
  }
  
  removeCart(id:any){
    this.userService.removeCart(id).subscribe((data) => {
      if(data){
        alert('item removed from cart');
      }
    })
  }

  emptyCart(){
    this.userService.emptyCart().subscribe((data) => {
      if(data){
        alert('item removed from cart');
      }
    })
  }
}
