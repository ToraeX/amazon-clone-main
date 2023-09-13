import { Component ,OnInit} from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{
  arrSeller:any = [];
  constructor(private seller:SellerService){

  }
  

  ngOnInit(){
    this.seller.getSellerDetails().subscribe(data => {
      if(data){
        this.arrSeller = data; 
        
      }
    });
    console.log(this.arrSeller);

  }
}
