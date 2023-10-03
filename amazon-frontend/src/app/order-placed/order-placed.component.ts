import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
  cartproducts: any = [];
  total: any = 0;
  FinalAddress: any = [];
  constructor(
    private seller: SellerService,
    private userService: UserServiceService
  ) {}
  ngOnInit(): void {
    this.FinalAddress = JSON.parse(localStorage.getItem('address'));
    console.log(this.FinalAddress);
    this.getcartproducts();
    console.log(this.getcartproducts)
  }

  getcartproducts() {
    this.seller.getcartproducts().subscribe((data) => {
      if (data) {
        let finalTotal = 0;
        this.cartproducts = data;
        this.cartproducts.forEach((element) => {
          if (element.hasOwnProperty('price')) {
            finalTotal += element.price * element.quantity;
          }
        });
        this.total = finalTotal;
      }
    });
  }
}
