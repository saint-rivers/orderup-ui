import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { catchError, Observable, of, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';
import { OrderRequest } from '../models/order-request';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  host = `${environment.apiUrl}/order-service/api/v1`;

  constructor(private httpClient: HttpClient) {}

  get(periodType: string): Observable<Order | null> {
    const queryParams: Params = { period: periodType };

    return this.httpClient
      .get<Order>(`${this.host}/orders`, {
        params: queryParams,
      })
      .pipe(
        retry(3),
        catchError((error) => {
          console.log(error);
          return of(null);
        })
      );
  }

  post(req: OrderRequest): Observable<Order> {
    return this.httpClient.post<Order>(`${this.host}/orders`, req);
  }
}
