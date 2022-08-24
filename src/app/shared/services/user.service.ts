import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: String = `${environment.apiUrl}/user-service/api`;

  constructor(private httpClient: HttpClient) {}

  fetchByEmail(email: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/user/email/${email}`);
  }
}
