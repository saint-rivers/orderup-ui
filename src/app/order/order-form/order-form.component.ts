import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderRequest } from 'src/app/shared/models/order-request';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  orderForm = new FormGroup({
    orderName: new FormControl(`Order on ${new Date().toLocaleDateString()}`),
    description: new FormControl(''),
  });

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {}

  handleSubmit() {
    const req: OrderRequest = {
      name: this.orderForm.value.orderName,
      description: this.orderForm.value.description,
      requestedAt: new Date().toISOString(),
      currency: 'USD',
    };
    this.orderService.post(req).subscribe((res) => {
      // redirect to order page on success
      if (res.id !== null || res.id !== undefined) {
        window.location.href = 'http://localhost:4200/orders';
      }
    });
  }
}
