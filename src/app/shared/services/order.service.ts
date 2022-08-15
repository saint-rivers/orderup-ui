import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../models/order';
import { OrderRequest } from '../models/order-request';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}

  get(periodType: string): Observable<Order> {
    const queryParams: Params = { period: periodType };

    return this.httpClient.get<Order>('http://localhost:9191/api/v1/orders', {
      params: queryParams,
    });
  }

  post(req: OrderRequest): Observable<Order> {
    return this.httpClient.post<Order>(
      'http://localhost:9191/api/v1/orders',
      req
    );
  }
}
