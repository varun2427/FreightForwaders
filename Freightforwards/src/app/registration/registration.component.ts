import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../cus.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  state: any;
  countries: any;
  customer: any;

  constructor(private service: CustomerService,private toastr: ToastrService
    ) {
    this.customer = {
      firstName: "",
      lastName: "",
      phoneNumber: '',
      email: "",
      password: "",
      address: "",
      city: "",
      country: "",
      state: "",
      pincode: ""
    };
  }

  ngOnInit() {
    this.service.getCountries().subscribe((data: any) => {
      
      this.countries = data;
      console.log(data);
    });
  }

  registerCustomer(regForm: any) {
    console.log(regForm);

    this.customer.firstName = regForm.firstName;
    this.customer.lastName = regForm.lastName;
    this.customer.phoneNumber = regForm.phoneNumber;
    this.customer.email = regForm.email;
    this.customer.password = regForm.password;
    this.customer.address = regForm.address;
    this.customer.city = regForm.city;
    this.customer.country = regForm.country;
    this.customer.state = regForm.state;
    this.customer.pincode = regForm.pincode;

    this.service.registerCustomer(this.customer).subscribe((data: any) => {
      console.log(data);

      // Display the registered customer details in the console
      console.log("register Customer Details:");
      console.log(this.customer);
    });
  }
}
