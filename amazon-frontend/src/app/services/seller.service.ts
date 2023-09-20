import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  saveSellerDetails(obj:any){
    return this.http.post('http://localhost:3000/addSeller',{data : obj})
   }  

   getSellerDetails(){
    return this.http.get('http://localhost:3000/getSellers')
   }  
   getBrands(){
    return this.http.get('http://localhost:3000/getBrands')
   }  

   addProducts(data :any){
    return this.http.post('http://localhost:3000/addProducts',{data})
   }  

   getProducts(){
    return this.http.get('http://localhost:3000/getProducts')
  }

  addtocart(data){
    return this.http.post('http://localhost:3000/AddtoCart',{data : data})
  }

  getcartproducts(){
    return this.http.get('http://localhost:3000/getcartproducts')
  }




  
}
