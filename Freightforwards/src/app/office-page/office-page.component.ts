import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../cus.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// office-page.component.ts


@Component({
  selector: 'app-office-page',
  templateUrl: './office-page.component.html',
  styleUrls: ['./office-page.component.css']
})
export class OfficePageComponent {
  selectAllChecked: boolean = false;
  selectedOptions: string[] = [];
  options: string[] = ['House shifting', 'House cleaning - 600', 'Doors painting - 500', 'Electrical works - 300', 'Washroom cleaning - 450', 'Wall painting - 1000', 'TV Installation - 300', 'AC Installation - 450', 'Washing machine Installation - 900'];
  totalAmount: number = 0;
  router: any;

  handleSelectAllChange() {
    if (this.selectAllChecked) {
      this.selectedOptions = this.options.slice();
    } else {
      this.selectedOptions = [];
    }
    this.calculateTotalAmount();
  }

  handleOptionChange() {
    if (this.selectedOptions.length === this.options.length) {
      this.selectAllChecked = true;
    } else {
      this.selectAllChecked = false;
    }
    this.calculateTotalAmount();
  }


  calculateTotalAmount() {
    this.totalAmount = 0;
    for (const option of this.selectedOptions) {
      const amount = parseInt(option.split('-')[1]?.trim(), 10);
      if (!isNaN(amount)) {
        this.totalAmount += amount;

      }
    }
  }
}




