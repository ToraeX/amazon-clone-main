import { Component } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  SellerForm = new FormGroup({
    name : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    address : new FormControl(''),
    mobile : new FormControl(''),
    
  });
  constructor(private seller:SellerService,private router:Router){

  }

  saveSellerDetails(){
    let obj = {
      name : this.SellerForm.controls.name.value,
      email : this.SellerForm.controls.email.value,
      password : this.SellerForm.controls.password.value,
      address : this.SellerForm.controls.address.value,
      mobile : this.SellerForm.controls.mobile.value,
    };

    // send api
    this.seller.saveSellerDetails(obj).subscribe(res => {
      console.log(res);
      if(res){
        alert('Seller Registered Succesfully');
        this.SellerForm.controls.name.setValue('');
        this.SellerForm.controls.email.setValue('');
        this.SellerForm.controls.password.setValue('');
        this.SellerForm.controls.address.setValue('');
        this.SellerForm.controls.mobile.setValue('');
        
      }
    });

  }

}
