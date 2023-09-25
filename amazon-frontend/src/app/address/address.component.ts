import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  Address = new FormGroup({
    name: new FormControl(''),
    mob: new FormControl(''),
    add: new FormControl(''),
    area: new FormControl(''),
    landmark: new FormControl(''),
    pincode: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    countryId: new FormControl(''),
  });
  arrCountryList : any = [];
  userObject:any = JSON.parse(localStorage.getItem('userData'));

  constructor(private user: UserServiceService, private router: Router) {}
  ngOnInit(): void {
    console.log(this.userObject.id);
    this.user.getCountryList().subscribe(res => {
      if(res){
        this.arrCountryList = res;
        // setting default value
        this.Address.controls.countryId.setValue(this.arrCountryList[0].id)
      }
    })
  }

  address() {
    var object = {
      name: this.Address.controls.name.value,
      mob: this.Address.controls.mob.value,
      address: this.Address.controls.add.value,
      area: this.Address.controls.area.value,
      landmark: this.Address.controls.landmark.value,
      pincode: this.Address.controls.pincode.value,
      city: this.Address.controls.city.value,
      state: this.Address.controls.state.value,
      countryId: this.Address.controls.countryId.value,
      userId : this.userObject.id
    };

    this.user.saveAddress(object).subscribe(
      (response) => {
        if (response) {
          alert('Saved successfully');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
