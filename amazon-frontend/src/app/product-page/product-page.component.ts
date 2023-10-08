import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  productid :any;
  productDetails: any;

constructor(private route:ActivatedRoute, private userService: UserServiceService, ){

}

ngOnInit(): void {
   this.productid = this.route.snapshot.params["id"]
      console.log(this.productid, "testiong")
      this.getSingleProduct(this.productid)
}


getSingleProduct(id) {
  this.userService.getSingleProduct(id).subscribe((data) => {
    if (data) {
      this.productDetails = data[0];
      console.log(this.productDetails, 'productDetails');
    }
  });
}

}
