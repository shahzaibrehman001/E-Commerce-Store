import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { CartItemComponent } from '../../../shared/components/cart-item/cart-item.component';
import { AddressCardComponent } from '../../../shared/components/address-card/address-card.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [MatDividerModule, CommonModule, CartItemComponent, AddressCardComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

  products = [1, 1, 1]

}
