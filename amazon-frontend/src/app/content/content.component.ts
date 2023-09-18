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
    console.log(data);
  }
}
