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

   

}
