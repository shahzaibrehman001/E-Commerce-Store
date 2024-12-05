import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { filters, singleFilter } from './FilterData';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { mensPantsPage1 } from '../../../../../Data/pants/men_page1';
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  imports: [MatButtonModule,
    MatMenuModule, MatDividerModule, MatIconModule, CommonModule, FormsModule, MatCheckboxModule, MatRadioModule, ProductCardComponent]
})
export class ProductsComponent {

  filterData: any
  singleFilterData: any
  menPants: any

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.filterData = filters; //importing filters from FilterData.ts
    this.singleFilterData = singleFilter;
    this.menPants = mensPantsPage1;
  }

  handleMultipleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };

    const filterValues = queryParams[sectionId] ? queryParams[sectionId].split(',') : [];

    const valueIndex = filterValues.indexOf(value);

    if (valueIndex != -1) {
      filterValues.splice(valueIndex, 1)
    }
    else {
      filterValues.push(value);
    }

    if (filterValues.length > 0) {
      queryParams[sectionId] = filterValues.join(',')
    }
    else {
      delete queryParams[sectionId]
    }

    this.router.navigate([], { queryParams })

  }

  handleSingleSelectFilter(value: string, sectionId: string) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams[sectionId] = value;

    this.router.navigate([], { queryParams })
  }

 
}
