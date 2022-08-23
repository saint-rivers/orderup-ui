import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  order = {
    orderId: 'ads',
    status: 'OPEN',
    createdAt: new Date(),
    buyer: 'John Doe',
    amountPaid: 'order is still open',
  };

  constructor() {}

  ngOnInit(): void {}
}
