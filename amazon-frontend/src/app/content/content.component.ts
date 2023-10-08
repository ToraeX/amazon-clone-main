import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges {
  arrResponse: any = [];
  searchText = '';
  arrSearchProducts: any = [];
  constructor(private seller: SellerService, private router: Router) {}
  ngOnChanges(changes: SimpleChanges) {
    console.log({changes});
  }
  ngOnInit(): void {
    this.arrSearchProducts = JSON.parse(localStorage.getItem('searchProducts'));
    console.log('local', this.arrSearchProducts);
    this.seller.getProducts().subscribe((data) => {
      if (data) {
        this.arrResponse = data;
        console.log(this.arrResponse);
      }
    });
  }

  productPage(id){
    this.router.navigate(["/productpage/"+ id])
  }
  
  // checksearchtext() {
  //   console.log(this.searchText);
  // }

  // navigateToProduct() {
  //   this.router.navigate(['/productpage']);
  // }

  addToCart(data: any) {
    console.log(data);
    var object = {
      user_id: 1,
      product_id: data.product_id,
      product_name: data.product_name,
      price: data.price,
      image_url: data.image_path,
      quantity: data.quantity,
      
    };

    this.seller.addtocart(object).subscribe((data) => {
      if (data) {
        alert(`product added to cart`);
      }
    });
  }
}
