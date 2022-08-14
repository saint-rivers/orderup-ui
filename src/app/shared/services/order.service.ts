import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<Order> {
    const options = {};

    return this.httpClient.get<Order>(
      'http://localhost:9191/api/v1/orders',
      options
    );
  }
}