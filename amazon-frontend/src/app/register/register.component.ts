import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  
  Register = new FormGroup({
    name: new FormControl(''),
    mob: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeat_pass: new FormControl('')
  });

  Login = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
   
  });

  constructor(private user : UserServiceService,private router:Router){
    
  }
  

  ngOnInit(): void {
    
  }

  register(){
   var object = {
    name : this.Register.controls.name.value,
    mob : this.Register.controls.mob.value,
    email : this.Register.controls.email.value,
    password : this.Register.controls.password.value
   }

   this.user.registerUser(object).subscribe(response => {
    if(response){
      alert('Registered Succesfully');
      this.Register.controls.name.setValue('');
      this.Register.controls.mob.setValue('');
      this.Register.controls.email.setValue('');
      this.Register.controls.password.setValue('');
      this.Register.controls.repeat_pass.setValue('');
      
    }
   })
   
  }

  get f (){
    return this.Login.controls
  }

  login(){
  console.log(this.f.email.value,this.f.password.value)

  let input = { 
    username : this.f.email.value,
    password : this.f.password.value
  }

  this.user.loginUser(input).subscribe((res:any)=>{
    if(!res){
      alert('user not exists');
    }else{
      
      localStorage.setItem('userData',JSON.stringify(res));
      //console.log( JSON.parse(localStorage.getItem('userData')));
      setTimeout(()=> {
        this.router.navigate(['']);
      },1000)
    }
   
  },(error)=>{
    console.log(error)
  })
  }
}
