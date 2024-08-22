import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioButton } from '@angular/material/radio';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProductReviewCardComponent } from "./product-review-card/product-review-card.component";
import { CommonModule } from '@angular/common';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';
import { SharedModule } from "../../../shared/shared.module";
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { StarRatingComponent } from "../../../shared/components/star-rating/star-rating.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  imports: [CommonModule, FormsModule, MatRadioButton, MatButtonModule, MatProgressBarModule, ProductReviewCardComponent, SharedModule, StarRatingComponent]
  
})
export class ProductDetailsComponent {

  selectedSize: any;
  reviews = [1, 1, 1];
  relatedProducts:any;


  ngOnInit(){
    this.relatedProducts=mens_kurta;
  }

  handleAddToCard() {
    console.log('Selected Size : ', this.selectedSize)
  }

}
