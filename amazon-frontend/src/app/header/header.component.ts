import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn:any = false;
  user :any;
  constructor(private router:Router){

  }

  ngOnInit(): void {
    console.log(this.userLoggedIn)  
     this.user = JSON.parse(localStorage.getItem('userData'));
    
    if(this.user){
      this.userLoggedIn = true;
    }

  }

  logout(){
    localStorage.clear();
    setTimeout(()=>{
      this.router.navigate(['register'])
    },1000)
    
    
  }
}
