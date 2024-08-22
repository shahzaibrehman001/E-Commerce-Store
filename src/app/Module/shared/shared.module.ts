import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ProductCardComponent
  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
