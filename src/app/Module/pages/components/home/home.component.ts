import { Component, OnInit } from '@angular/core';
import { MainCarouselComponent } from "./main-carousel/main-carousel.component";
import { ProductSliderComponent } from "./product-slider/product-slider.component";
import { menJeans } from '../../../../../Data/Men/men_jeans';
import { gounsPage1 } from '../../../../../Data/Gouns/gouns';
import { mensShoesPage1 } from '../../../../../Data/shoes';
import { lehngacholiPage2 } from '../../../../../Data/Saree/lenghaCholiPage2';
import { mens_kurta } from '../../../../../Data/Men/men_kurta';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [MainCarouselComponent, ProductSliderComponent]
})
export class HomeComponent implements OnInit {

    menJeans: any
    womenGouns: any
    lehangaCholi: any
    menKurta: any
    menShoes: any

    ngOnInit(): void {
        this.menJeans = menJeans.slice(12, 17) //shows only 5 items
        this.womenGouns = gounsPage1.slice(15, 20)
        this.lehangaCholi = lehngacholiPage2.slice(0, 5)
        this.menKurta = mens_kurta.slice(6, 11)
        this.menShoes = mensShoesPage1.slice(11, 16)
    }
}
