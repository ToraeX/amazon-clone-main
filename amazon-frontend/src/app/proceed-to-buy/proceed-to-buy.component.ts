import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { UserServiceService } from '../services/user-service.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proceed-to-buy',
  templateUrl: './proceed-to-buy.component.html',
  styleUrls: ['./proceed-to-buy.component.css'],
})
export class ProceedToBuyComponent implements OnInit {
  cartproducts: any = [];
  AddressNew = new FormGroup({
    countryId: new FormControl(''),
    name: new FormControl(''),
    mob: new FormControl(''),
    area: new FormControl(''),
    landmark: new FormControl(''),
    address: new FormControl(''),
    pincode: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
  });
  userObject: any = JSON.parse(localStorage.getItem('userData'));
  isAddressAdded = false;
  addresses: any = [];
  total: any = 0;
  @ViewChild('btnClose')
  btnClose: ElementRef;

  constructor(
    private seller: SellerService,
    private userService: UserServiceService,
    private user: UserServiceService
  ) {}
  ngOnInit(): void {
    this.getcartproducts();
    this.getaddress();
    // if(this.isAddressAdded){

    // }
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

  getaddress() {
    this.userService.getuserAddress().subscribe((data) => {
      if (data) {
        this.addresses = data;
        console.log(data, 'address');
      }
    });
  }

  saveAddress() {
    var object = {
      name: this.AddressNew.controls.name.value,
      mob: this.AddressNew.controls.mob.value,
      address: this.AddressNew.controls.address.value,
      area: this.AddressNew.controls.area.value,
      landmark: this.AddressNew.controls.landmark.value,
      pincode: this.AddressNew.controls.pincode.value,
      city: this.AddressNew.controls.city.value,
      state: this.AddressNew.controls.state.value,
      countryId: this.AddressNew.controls.countryId.value,
      userId: this.userObject.id,
    };

    this.user.saveAddress(object).subscribe(
      (response) => {
        if (response) {
          this.btnClose.nativeElement.click();
          alert('Saved successfully');
          this.isAddressAdded = true;
          this.getaddress();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
