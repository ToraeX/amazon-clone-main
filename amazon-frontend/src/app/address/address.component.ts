import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit{
  
  Address = new FormGroup({
    name: new FormControl(''),
    mob: new FormControl(''),
    add: new FormControl(''),
    area: new FormControl(''),
    landmark: new FormControl(''),
    pincode: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
  });

  constructor(private user : UserServiceService,private router:Router){
    
  }
  ngOnInit(): void {
    
  }

  
address(){ console.log('WOrking')
  var object = {
    Name: this.Address.controls.name.value,
    mob: this.Address.controls.mob.value,
    add: this.Address.controls.add.value,
    area: this.Address.controls.area.value,
    landmark: this.Address.controls.landmark.value,
    pincode: this.Address.controls.pincode.value,
    city: this.Address.controls.city.value,
    State: this.Address.controls.state.value

}
this.user.addressUser(object).subscribe(response =>{
  if(response){
    alert('Saved SUcesful');
  }
},(error)=>{
  console.log(error)
})
}
}
