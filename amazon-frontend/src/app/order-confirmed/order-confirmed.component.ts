import { Component, OnInit , Renderer2, ViewChild} from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { SellerService } from '../services/seller.service';
import { jsPDF } from "jspdf";
import { Html2CanvasOptions } from 'jspdf';
import html2canvas from 'html2canvas';





@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.css'],
})
export class OrderConfirmedComponent implements OnInit {
  addressDetails = JSON.parse(localStorage.getItem('address'));
  userData;
  sessionId = localStorage.getItem('sessionId');
  productObject: any = [];
  orderDetails: any = [];
  content : any;
  constructor(
    private seller: SellerService,
    private user: UserServiceService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    this.OrderConfirmed();
  }

  OrderConfirmed() {
    let obj = {
      addressId: this.addressDetails.id,
      sessionId: this.sessionId,
      userId: this.userData.id,
    };

    this.seller.OrderConfirmed(obj).subscribe((data: any) => {
      if (data) {
        console.log("orderDetails",data);
        this.orderDetails = data[0];
        let obj = {
          productId: this.orderDetails.product_id,
        };
        this.user.getProductFromOrderTables(obj).subscribe((res: any) => {
          this.productObject = res;
          console.log("productObject",res);
        });
      }
    });
  }
  makePdf(){
    let pdf = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a1',
      putOnlyUsedFonts:true
     });

     var data = document.getElementById('content');
     html2canvas(data).then(canvas => {
        var imgWidth = document.getElementById('content').offsetWidth;
        var pageHeight = 295;
        var imageHeight = canvas.height * imgWidth /canvas.width;
        const contentDataUrl = canvas.toDataURL('image/png');
        var position = 180;
        pdf.setFontSize(100);
        pdf.text('Amazon clone',200,150);
        pdf.addImage(contentDataUrl,'PNG',0,position,imgWidth,imageHeight);
        pdf.save('bill.pdf');
     })
  }
 

   
}
