import { Component, OnInit ,Input,SimpleChanges,OnChanges} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SellerService } from '../services/seller.service';
import { UserServiceService } from '../services/user-service.service';
import { Conditional } from '@angular/compiler';
import { takeUntil } from 'rxjs/operators';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnChanges{
  @Input() cartObject;
  userLoggedIn:any = false;
  user :any;
  cartproducts: any =[];
  total : any = 0;
  searchString : string;
  isHomeRoute: boolean;
  constructor(private router:Router ,private seller:SellerService,private userService :UserServiceService){

    this.router.events.subscribe((event: any) => { 
      if (event instanceof NavigationEnd) {
        this.isHomeRoute = this.router.url === '/';
      }
    });

  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit(): void {
   // this.getcartproducts()
     this.userService.getLoginObject.subscribe(user => {
      this.user = user;
      console.log(this.router.url)
    
     })
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
  searchProducts(event:any){
    
    
    this.searchString = event.target.value;
    
      this.userService.searchProducts(this.searchString).subscribe((res) => {
        this.userService.updateData(res);
        this.userService.updateSearch(true);
      });
    
  }
  itoggled:boolean =false;

  togglemenu(){
    this.itoggled = !this.itoggled;
  }
}
