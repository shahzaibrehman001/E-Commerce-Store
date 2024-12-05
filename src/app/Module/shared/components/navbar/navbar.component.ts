import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { NavContentComponent } from "./nav-content/nav-content.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatMenuModule, CommonModule, NavContentComponent]
})
export class NavbarComponent {

  constructor(private router:Router){

  }

  currentSection: any
  isNavbarContentOpen: any

  openNavbarContent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }

  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }

  navigateTo(path: any) {
    this.router.navigate([path])
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector(".modal-container"); //modal-container class given in html 
    const openButtons = document.querySelectorAll(".open-button"); //Navbar content select all categories as buttons

    let clickInsideButton = false; //supposing button is not selected

    //Functionality written to open buttons and this open-button class will be given to button in html
    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true; // changed the state to selected
      }
    })

    // Checks Clicks on Men | Women buttons if Clicks inside button then it will not close. Clicks outside button anywhere will close navbarContent
    if (modalContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }

}
