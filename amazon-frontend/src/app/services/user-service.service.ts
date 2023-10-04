import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  registerUser(data : any){
    return this.http.post('http://localhost:3000/register',{data})
  }

 loginUser(data : any){
    return this.http.post('http://localhost:3000/login',{data})
  }


  saveAddress(data: any){
  return this.http.post('http://localhost:3000/saveAddress',{data})
}

getuserAddress(){
  return this.http.get('http://localhost:3000/getAddress')
}
removeCart(data: any){
  return this.http.post('http://localhost:3000/removeCart',{id : data})
}

emptyCart(){
  return this.http.post('http://localhost:3000/emptyCart',{})
}

getCountryList(){
  return this.http.get('http://localhost:3000/getCountryList')
}

savePayment(obj : any){
  return this.http.post('http://localhost:3000/savePayment',{data : obj})
}
getProductFromOrderTables(obj:any){
  return this.http.post('http://localhost:3000/getProductFromOrderTables',{data : obj})
}





}
