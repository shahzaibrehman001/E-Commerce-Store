import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { AddressCardComponent } from '../../../../shared/components/address-card/address-card.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, AddressCardComponent, FormsModule, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './address-form.component.html',
  styleUrl: './address-form.component.scss'
})
export class AddressFormComponent {

  constructor(private formBuilder: FormBuilder) {

  }

  addresses = [1, 1, 1]

  myForm: FormGroup = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    streetAddress: ["", Validators.required],
    city: ["", Validators.required],
    state: ["", Validators.required],
    zipCode: ["", Validators.required],
    mobile: ["", Validators.required]
  })

  handleCreateOrder(item: any) {

  }

  handleSubmit = () => {
    const formValue = this.myForm.value
    console.log("Form Data", formValue)
  }

}
