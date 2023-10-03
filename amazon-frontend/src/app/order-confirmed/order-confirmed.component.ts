import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css'],
})
export class OrderConfirmedComponent implements OnInit {
  cartproducts: any = [];
  total: any = 0;
  FinalAddress: any = [];
  constructor(
    private seller: SellerService,
    private userService: UserServiceService,
  ) {}
  ngOnInit(): void {
    this.getcartproducts();
    console.log(this.getcartproducts);
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
