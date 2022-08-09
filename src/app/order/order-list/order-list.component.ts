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
  // orders = [
  //   {
  //     id: 'bb9ee292-95a3-4523-9a50-6347ad5a9a46',
  //     name: 'string',
  //     description: 'string',
  //     requestedItems: [
  //       {
  //         id: 2,
  //         name: 'string',
  //         details: 'string',
  //         cost: 1000.0,
  //         currency: 'USD',
  //         status: 'OPEN',
  //         requestedBy: 'cb65cf1f-206b-4275-9df2-f3c6217175c5',
  //         cancelledBy: null,
  //         isAcquired: false,
  //         requestedAt: '2022-08-06T16:02:35.567+00:00',
  //         lastUpdated: '2022-08-06T16:02:35.567+00:00',
  //         priority: 0,
  //       },
  //       {
  //         id: 3,
  //         name: 'string',
  //         details: 'string',
  //         cost: 1000.0,
  //         currency: 'USD',
  //         status: 'OPEN',
  //         requestedBy: '6555b68a-338e-4686-b9dc-65cc9968e482',
  //         cancelledBy: null,
  //         isAcquired: false,
  //         requestedAt: '2022-08-06T16:02:35.567+00:00',
  //         lastUpdated: '2022-08-06T16:02:35.567+00:00',
  //         priority: 0,
  //       },
  //       {
  //         id: 4,
  //         name: 'string',
  //         details: 'string',
  //         cost: 1000.0,
  //         currency: 'USD',
  //         status: 'OPEN',
  //         requestedBy: '18366f06-aff8-4b64-9ab3-36f3c5fc9efd',
  //         cancelledBy: null,
  //         isAcquired: false,
  //         requestedAt: '2022-08-06T16:02:35.567+00:00',
  //         lastUpdated: '2022-08-06T16:02:35.567+00:00',
  //         priority: 0,
  //       },
  //       {
  //         id: 5,
  //         name: 'string',
  //         details: 'string',
  //         cost: 1000.0,
  //         currency: 'USD',
  //         status: 'OPEN',
  //         requestedBy: '209c1a85-77b5-4cdb-ad4f-3722a182dbef',
  //         cancelledBy: null,
  //         isAcquired: false,
  //         requestedAt: '2022-08-06T16:02:35.567+00:00',
  //         lastUpdated: '2022-08-06T16:02:35.567+00:00',
  //         priority: 0,
  //       },
  //       {
  //         id: 6,
  //         name: 'string',
  //         details: 'string',
  //         cost: 0.0,
  //         currency: 'USD',
  //         status: 'OPEN',
  //         requestedBy: 'd087567f-ce27-4b40-b216-3f439befe9f1',
  //         cancelledBy: null,
  //         isAcquired: false,
  //         requestedAt: '2022-08-06T17:59:04.217+00:00',
  //         lastUpdated: '2022-08-06T17:59:04.217+00:00',
  //         priority: 0,
  //       },
  //     ],
  //     createdAt: '2022-08-09T16:30:26.142+00:00',
  //     createdBy: {
  //       id: '43927b29-22de-46c3-aa36-c06266c548f4',
  //       username: 'dayan',
  //       email: 'eam.dayan@gmail.com',
  //       firstName: 'Dayan',
  //       lastName: 'Eam',
  //       status: 'APPROVED',
  //     },
  //     grandTotal: 0.0,
  //     currency: 'USD',
  //   },
  //   {
  //     id: '140ce854-ee01-4d50-9fda-dc8bb6194158',
  //     name: 'string',
  //     description: 'string',
  //     requestedItems: [],
  //     createdAt: '2022-08-09T16:30:26.142+00:00',
  //     createdBy: {
  //       id: '43927b29-22de-46c3-aa36-c06266c548f4',
  //       username: 'dayan',
  //       email: 'eam.dayan@gmail.com',
  //       firstName: 'Dayan',
  //       lastName: 'Eam',
  //       status: 'APPROVED',
  //     },
  //     grandTotal: 0.0,
  //     currency: 'USD',
  //   },
  //   {
  //     id: '8339f38f-1f06-4f0f-9531-ab5888f578ac',
  //     name: 'string',
  //     description: 'string',
  //     requestedItems: [],
  //     createdAt: '2022-08-07T16:30:26.142+00:00',
  //     createdBy: {
  //       id: '43927b29-22de-46c3-aa36-c06266c548f4',
  //       username: 'dayan',
  //       email: 'eam.dayan@gmail.com',
  //       firstName: 'Dayan',
  //       lastName: 'Eam',
  //       status: 'APPROVED',
  //     },
  //     grandTotal: 0.0,
  //     currency: 'USD',
  //   },
  //   {
  //     id: '4c92e0fb-adcb-4aea-87e9-50d151960531',
  //     name: 'string',
  //     description: 'string',
  //     requestedItems: [],
  //     createdAt: '2022-08-08T16:30:26.142+00:00',
  //     createdBy: {
  //       id: 'bbb6e068-1a7a-46f2-8290-1ef47b495a5e',
  //       username: 'rocavius',
  //       email: 'rocaviusii@gmail.com',
  //       firstName: 'dayan',
  //       lastName: 'eam',
  //       status: 'APPROVED',
  //     },
  //     grandTotal: 0.0,
  //     currency: 'USD',
  //   },
  //   {
  //     id: '9e43fd08-14ec-4394-8f53-f6416f588793',
  //     name: 'string',
  //     description: 'string',
  //     requestedItems: [],
  //     createdAt: '2022-08-06T16:03:03.188+00:00',
  //     createdBy: {
  //       id: '43927b29-22de-46c3-aa36-c06266c548f4',
  //       username: 'dayan',
  //       email: 'eam.dayan@gmail.com',
  //       firstName: 'Dayan',
  //       lastName: 'Eam',
  //       status: 'APPROVED',
  //     },
  //     grandTotal: 0.0,
  //     currency: 'USD',
  //   },
  //   {
  //     id: 'c8ea50e9-d856-4dd5-ab7e-570d01cc0d6b',
  //     name: 'string',
  //     description: 'string',
  //     requestedItems: [],
  //     createdAt: '2022-08-07T16:30:26.142+00:00',
  //     createdBy: {
  //       id: 'bbb6e068-1a7a-46f2-8290-1ef47b495a5e',
  //       username: 'rocavius',
  //       email: 'rocaviusii@gmail.com',
  //       firstName: 'dayan',
  //       lastName: 'eam',
  //       status: 'APPROVED',
  //     },
  //     grandTotal: 0.0,
  //     currency: 'USD',
  //   },
  //   {
  //     id: '264a3afa-a682-478d-9378-a428a1b8072c',
  //     name: 'string',
  //     description: 'string',
  //     requestedItems: [],
  //     createdAt: '2022-08-07T16:30:26.142+00:00',
  //     createdBy: {
  //       id: 'bbb6e068-1a7a-46f2-8290-1ef47b495a5e',
  //       username: 'rocavius',
  //       email: 'rocaviusii@gmail.com',
  //       firstName: 'dayan',
  //       lastName: 'eam',
  //       status: 'APPROVED',
  //     },
  //     grandTotal: 0.0,
  //     currency: 'USD',
  //   },
  //   {
  //     id: '8e5a6704-9712-42d8-a114-09f74fa851ac',
  //     name: 'string',
  //     description: 'string',
  //     requestedItems: [],
  //     createdAt: '2022-08-07T16:30:26.142+00:00',
  //     createdBy: {
  //       id: '43927b29-22de-46c3-aa36-c06266c548f4',
  //       username: 'dayan',
  //       email: 'eam.dayan@gmail.com',
  //       firstName: 'Dayan',
  //       lastName: 'Eam',
  //       status: 'APPROVED',
  //     },
  //     grandTotal: 0.0,
  //     currency: 'USD',
  //   },
  //   {
  //     id: '09b3b384-0c02-42cb-ae7b-5609a28d1a28',
  //     name: 'string',
  //     description: 'string',
  //     requestedItems: [],
  //     createdAt: '2022-08-07T16:30:26.142+00:00',
  //     createdBy: {
  //       id: '43927b29-22de-46c3-aa36-c06266c548f4',
  //       username: 'dayan',
  //       email: 'eam.dayan@gmail.com',
  //       firstName: 'Dayan',
  //       lastName: 'Eam',
  //       status: 'APPROVED',
  //     },
  //     grandTotal: 0.0,
  //     currency: 'USD',
  //   },
  // ];

  orders: Order[] = []
  filteredOrders: any = []
  currentType: TabType = 'today';

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    // this.orders = []
    this.orderService.get().subscribe(
      (res) => {
        this.orders.push(res);
        this.filteredOrders = res;
      }
    );
  }

  selectTab(type: TabType) {
    const now = new Date();
    const tmp1 = getStartAndEndOfWeek(new Date());
    const tmp2 = getStartAndEndOfMonth(new Date());

    console.log(tmp1.toLocaleString());
    console.log(tmp2[0].toLocaleString().substring(0, 1));

    this.currentType = type;
    switch (this.currentType) {
      case 'today':
        this.filteredOrders = this.orders.filter((order) =>
          order.createdAt.toISOString().includes(new Date().toISOString().substring(0, 10))
        );
        break;
      case 'thisWeek':
        this.filteredOrders = this.orders.filter((order) => {
          getStartAndEndOfWeek(now).map((day) =>
            order.createdAt.toISOString().includes(day.toLocaleString().substring(0, 10))
          );
          return order;
        });
        break;
      case 'thisMonth':
        this.filteredOrders = this.orders.filter((order) =>
          order.createdAt.toISOString().includes(new Date().toISOString().substring(0, 10))
        );
        break;
      default:
        break;
    }
  }
}

function getStartAndEndOfWeek(date: Date) {
  const dates: Date[] = [];
  for (let index = 0; index < 7; index++) {
    dates[index] = new Date();
  }

  for (let index = 0; index < dates.length; index++) {
    dates[index].setDate(date.getDate() + index - date.getDay());
  }

  return dates;
}

function getStartAndEndOfMonth(date: Date) {
  const start = new Date(date.getTime());
  const end = new Date(date.getTime());

  start.setDate(1);
  end.setMonth(end.getMonth() + 1);
  end.setDate(end.getDate() - 1);
  return [start, end];
}
