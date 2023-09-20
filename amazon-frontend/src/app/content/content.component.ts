import { Component,OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  arrResponse :any = [];
  constructor(private seller:SellerService){

  }
  ngOnInit(): void {
    this.seller.getProducts().subscribe(data => {
      if(data) {
        this.arrResponse = data;
        console.log(this.arrResponse)
      }
    })
  }  

  addToCart(data:any){
    console.log(data)
    var object ={
      user_id:1,
      product_id : data.product_id,
      product_name: data.product_name,
      price: data.price,
      image_url:data.image_path,
      quantity:data.quantity
    }

    this.seller.addtocart(object).subscribe(data => {
      if(data) {
        
        alert(`product added to cart`);
      }
    })
  

  }
}
