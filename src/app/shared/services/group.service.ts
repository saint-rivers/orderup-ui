import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../models/group';
import { GroupRequest } from '../models/group-request';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  host = 'http://localhost:8000/group-service/api/v1';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.host}/groups`);
  }

  post(req: GroupRequest): Observable<Group> {
    return this.httpClient.post<Group>(`${this.host}/groups`, req);
  }
}
