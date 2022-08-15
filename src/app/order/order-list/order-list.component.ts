import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from 'src/app/shared/services/order.service';
import { TabType } from './TabType';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {

  orders: any = [];
  currentType: TabType = 'TODAY';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.get(this.currentType.toString()).subscribe((res) => {
      this.orders = res;
    });
  }

  selectTab(type: TabType) {
    this.currentType = type;
    this.orderService.get(this.currentType.toString()).subscribe((res) => {
      this.orders = res;
    });
  }
}
