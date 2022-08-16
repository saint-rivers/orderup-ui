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

  currentType: string = 'TODAY';

  tabs = [
    { text: 'Today', value: 'TODAY' },
    { text: 'This Week', value: 'THIS_WEEK' },
    { text: 'This Month', value: 'THIS_MONTH' },
  ];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.get(this.currentType).subscribe((res) => {
      this.orders = res;
    });
  }

  selectTab(type: TabType) {
    this.currentType = type;
    this.orderService.get(this.currentType).subscribe((res) => {
      this.orders = res;
    });
  }
}
