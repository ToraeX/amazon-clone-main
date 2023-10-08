import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs'; 



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  public content = new BehaviorSubject<any>([]);
  public share = this.content.asObservable();
  
  private isSearched = new BehaviorSubject<Boolean>(false);
  public shareString = this.isSearched.asObservable();
  updateData(data){
    if(data){
      this.content.next(data);
    }
    
  }
  updateSearch(string){
    this.isSearched.next(string);
  }

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

searchProducts(obj:any){
  return this.http.post('http://localhost:3000/searchProducts',{data : obj});
}

getSingleProduct(id){
  return this.http.get('http://localhost:3000/getSingleProduct/'+ id);
}
}
