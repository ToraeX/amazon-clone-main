import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './address/address.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerComponent } from './seller/seller.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProceedToBuyComponent } from './proceed-to-buy/proceed-to-buy.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AddressComponent,
    AboutUsComponent,
    RegisterComponent,
    ContactUsComponent,
    SellerComponent,
    AddProductsComponent,
    CheckoutComponent,
    ProceedToBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
