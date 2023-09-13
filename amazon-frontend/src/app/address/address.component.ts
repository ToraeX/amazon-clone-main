import { Component ,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

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

  constructor() {}
  ngOnInit(): void {
    
  }

  
address(): void{

  
}

}
