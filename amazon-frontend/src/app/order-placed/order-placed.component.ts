import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
  cartproducts: any = [];
  total: any = 0;
  FinalAddress: any = [];
  userData : any = [];
  PaymentForm = new FormGroup({
    name: new FormControl(),
    cardNumber: new FormControl(),
    expiry: new FormControl(),
    cvv: new FormControl(),
  });
  constructor(
    private seller: SellerService,
    private user: UserServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.FinalAddress = JSON.parse(localStorage.getItem('address'));
    this.userData = JSON.parse(localStorage.getItem('userData'));
    
    
    this.getcartproducts();
    
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

  savePayment() {
    const { name, cardNumber, expiry, cvv } = this.PaymentForm.controls;
    const obj = {
      name: name.value,
      cardNumber: cardNumber.value,
      expiry: expiry.value,
      cvv: cvv.value,
      address: this.FinalAddress.id,
      userId : this.userData.id
    };
    
    this.user.savePayment(obj).subscribe(
      (response:any) => {
        if (response) {
          alert('Order Placed successfully');
          if(response.hasOwnProperty('sessionId')){
            localStorage.setItem('sessionId' ,response.sessionId)
          }
          setTimeout(() => {
            this.router.navigateByUrl('/OrderConfirmed');
          }, 1000);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
