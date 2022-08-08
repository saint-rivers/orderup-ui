import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders = [
    {
      name: 'Ordered on yesterday',
      group: 'HRD Center',
    },
    {
      name: 'Ordered on 12/12/2022',
      group: 'HRD Center',
    },
    {
      name: 'Ordered on 14/12/2022',
      group: 'MB',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
