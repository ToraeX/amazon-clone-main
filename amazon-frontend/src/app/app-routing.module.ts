import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AddressComponent } from './address/address.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SellerComponent } from './seller/seller.component';
import { AddProductsComponent } from './add-products/add-products.component';


const routes: Routes = [
  {path : '',component : ContentComponent},
  {path : 'address',component : AddressComponent},
  {path : 'about-us',component : AboutUsComponent},
  {path : 'register',component : RegisterComponent},
  {path : 'contact-us',component : ContactUsComponent},
  {path : 'seller',component : SellerComponent},
  {path : 'seller/addProducts',component : AddProductsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
