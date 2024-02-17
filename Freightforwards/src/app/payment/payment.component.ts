import { Component, HostListener } from '@angular/core';
import { OrderServiceService } from '../order-service.service';
import { HttpClient } from '@angular/common/http';

declare var Razorpay: any; // Add this line to declare Razorpay

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  title = 'demo';

  form: any = {};

  constructor(private http: HttpClient, private orderService: OrderServiceService) { }

  ngOnInit() { }

  sayHello() {
    alert("Hello DK");
  }

  paymentId: string = '';

  error: string = '';

  options = {
    key: "",
    amount: "",
    name: "Kalyan",
    description: "Web Development",
    image: "assets/image/src:Logo.png.png",
    order_id: "",
    handler: function (response: any) {
      var event = new CustomEvent("payment.success", {
        detail: response,
        bubbles: true,
        cancelable: true
      });
      window.dispatchEvent(event);
    },
    prefill: {
      name: "",
      email: "",
      contact: ""
    },
    notes: {
      address: ""
    },
    theme: {
      color: "#3399cc"
    }
  };

  onSubmit(): void {
    this.paymentId = "";
    this.error = "";
    this.orderService.createOrder(this.form).subscribe({
      next: (data: any) => {
        console.log("Order created:", data);
        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = data.applicationFee; //paise
        this.options.prefill.name = "Coding World";
        this.options.prefill.email = "codingworld@gmail.com";
        this.options.prefill.contact = "999999999";

        var rzp = new Razorpay(this.options);
        rzp.on("payment.failed", (response: any) => {
          console.log("Payment failed:", response);
          console.log(response.error.code);
          console.log(response.error.description);
          console.log(response.error.source);
          console.log(response.error.step);
          console.log(response.error.reason);
          console.log(response.error.metadata.order_id);
          console.log(response.error.metadata.payment_id);
          this.error = response.error.reason;
        });
        rzp.on("payment.success", (response: any) => {
          console.log("Payment success:", response);
          console.log(response.razorpay_payment_id); // remove extra `.` character here
          this.paymentId = response.razorpay_payment_id;
        });
        rzp.open();
      },
      error: (err: any) => {
        console.log("Order creation failed:", err);
        this.error = err.error.message;
      }
    });
  }


  @HostListener("window:payment.success", ["$event"])
  onPaymentSuccess(event: any): void {
    console.log(event.detail);
  }

}
