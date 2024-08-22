import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    HomeProductCardComponent,
    MainCarouselComponent,
    ProductSliderComponent,
    RouterOutlet,
    ProductsComponent,
  ],

  exports: [
    HomeComponent,
    ProductsComponent,
  ]
})
export class PagesModule { }
