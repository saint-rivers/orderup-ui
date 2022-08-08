import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  orderForm = new FormGroup({
    orderName: new FormControl(`Order on ${new Date().toLocaleDateString()}`),
  });

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    console.log('hi');
  }
}
