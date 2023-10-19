import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'amazon';
  
   data = 'pratik';
  getCartDetails(data :any){
    console.log(data);
  } 
  itoggled:boolean =false;

  togglemenu(){
    this.itoggled = this.itoggled;
  }
  
  

}
