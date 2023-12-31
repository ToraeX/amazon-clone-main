import { Component ,OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { SellerService } from '../services/seller.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  addressDetails = JSON.parse(localStorage.getItem('address'));
  userData;
  sessionId = localStorage.getItem('sessionId');
  productObject: any = [];
  orderDetails: any = [];
  constructor(
    private seller: SellerService,
    private user: UserServiceService
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.OrderConfirmed();
  }

  OrderConfirmed() {
    let obj = {
      addressId: this.addressDetails.id,
      sessionId: this.sessionId,
      userId: this.userData.id,
    };
    this.seller.OrderConfirmed(obj).subscribe((data: any) => {
      if (data) {
        this.orderDetails = data[0];
        let obj = {
          productId: this.orderDetails.product_id,
        };
        this.user.getProductFromOrderTables(obj).subscribe((res: any) => {
          this.productObject = res;
          console.log({res});
        });
      }
    });
  }
}
