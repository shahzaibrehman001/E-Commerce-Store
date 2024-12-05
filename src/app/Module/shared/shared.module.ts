import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackerComponent } from './components/order-tracker/order-tracker.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ProductCardComponent,
    CartItemComponent,
    StarRatingComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent,
    CartItemComponent,
    StarRatingComponent,
    AddressCardComponent,
    OrderTrackerComponent
  ]
})
export class SharedModule { }
