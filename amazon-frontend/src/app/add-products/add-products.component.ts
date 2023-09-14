import { Component ,OnInit} from '@angular/core';
import { SellerService } from '../services/seller.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{
  arrSeller:any = [];
  arrBrands:any = [];
  constructor(private seller:SellerService,private router:Router){

  }

  AddProductForm = new FormGroup({
    sellerId : new FormControl(''),
    brand : new FormControl(''),
    name : new FormControl(''),
    price : new FormControl(''),
    specs : new FormControl(''),
    imagePath : new FormControl(''),
  });
  

  ngOnInit(){
    this.seller.getSellerDetails().subscribe(data => {
      if(data){
        this.arrSeller = data;
        // setting the dropdown value initially
        this.AddProductForm.controls.sellerId.setValue(`${this.arrSeller[0].seller_id}`)
      }
    });
    this.seller.getBrands().subscribe(data => {
      if(data){
        this.arrBrands = data;
        // setting the dropdown value initially
        this.AddProductForm.controls.brand.setValue(`${this.arrBrands[0].brand_id}`)
      }
    })
  }

  addProducts(){
    let formObject = this.AddProductForm.controls;
    let obj = {
      sellerId : formObject.sellerId.value,
      name : formObject.name.value,
      price : formObject.price.value,
      specs : formObject.specs.value,
      imagePath : formObject.imagePath.value,
      brand : formObject.brand.value,
    }
    // send Api
    this.seller.addProducts(obj).subscribe(res => {
      if(res){
        alert('Registered Succesfully');
        // this.AddProductForm.controls.sellerId.setValue('');
        this.AddProductForm.controls.name.setValue('');
        this.AddProductForm.controls.price.setValue('');
        this.AddProductForm.controls.specs.setValue('');
        this.AddProductForm.controls.imagePath.setValue('');
        setTimeout(()=> {
          this.router.navigate(['']);
        },1000)    
      }
    });
  }
}
