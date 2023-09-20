import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() cartObject;
  userLoggedIn:any = false;
  user :any;
  cartproducts: any =[]
  constructor(private router:Router ,private seller:SellerService){

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
        this.cartproducts = data;
        
      }
    })
  }

  getCartData(){
    this.getcartproducts();
  }
}
