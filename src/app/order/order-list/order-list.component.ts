import { Component, OnInit } from '@angular/core';
import { Tab } from 'src/app/shared/models/tab';
import { OrderService } from 'src/app/shared/services/order.service';
import { TabType } from './TabType';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders: any = [];
  tabs: Tab[] = [
    { text: 'Today', value: 'TODAY' },
    { text: 'This Week', value: 'THIS_WEEK' },
    { text: 'This Month', value: 'THIS_MONTH' },
  ];

  currentType: Tab = this.tabs[0];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.get(this.currentType.value).subscribe((res) => {
      this.orders = res;
    });
  }

  selectTab(type: TabType) {
    this.currentType = this.tabs.find((tab) => tab.value === type)!!;
    this.orderService.get(this.currentType.value).subscribe((res) => {
      this.orders = res;
    });
  }
}
