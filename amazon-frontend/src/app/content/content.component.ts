import {
  Component,
  OnInit,
  SimpleChanges,
  OnChanges,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';
import { SellerService } from '../services/seller.service';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit, OnChanges {
  @Input() isChange: boolean;
  @ViewChild('closePopup') closePopup: ElementRef

  arrResponse: any = [];
  arrSearchProducts: any = [];
  isSearchClicked;
  constructor(
    private seller: SellerService,
    public userService: UserServiceService,
    private router : Router

  ) {}
  ngOnChanges(changes: SimpleChanges) {
    console.log({ changes });
  }
  ngOnInit(): void {
    this.seller.getProducts().subscribe((data) => {
      if (data) {
        this.arrResponse = data;
      }
    });

    // check if search is done
    this.userService.shareString.subscribe((x) => {
      this.isSearchClicked = x;
    });

    this.userService.share.subscribe((x) => {
      if (this.isSearchClicked) {
        this.arrSearchProducts = x;
      }
      
    });
  }

  addToCart(data: any) {
    var object = {
      user_id: 1,
      product_id: data.product_id,
      product_name: data.product_name,
      price: data.price,
      image_url: data.image_path,
      quantity: data.quantity,
    };

    this.seller.addtocart(object).subscribe((data) => {
      if (data) {
        alert(`product added to cart`);
      }
    });
  }
  productPage(id) {
    this.router.navigate(['/productpage/' + id]);
  }

  closeModal(){
    document.getElementById("closeModal").click();
  }
}
