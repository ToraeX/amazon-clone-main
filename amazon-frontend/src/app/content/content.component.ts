import { Component,OnInit ,SimpleChanges,OnChanges, Input} from '@angular/core';
import { SellerService } from '../services/seller.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() isChange : boolean;
  arrResponse :any = [];
  arrSearchProducts :any = [];
  isSearchClicked ;
  constructor(private seller:SellerService, public userService : UserServiceService){

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log({changes});
  }
  ngOnInit(): void {
    
    this.seller.getProducts().subscribe(data => {
      if(data) {
        this.arrResponse = data;
        console.log(this.arrResponse)
      }
    });

    // check if search is done
    this.userService.shareString.subscribe(x => {
      this.isSearchClicked = x;
      
    });
    

    this.userService.share.subscribe((x) => {
      if(this.isSearchClicked){
        this.arrSearchProducts = x
      }
      console.log('Value',this.arrSearchProducts);
    }); 
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
