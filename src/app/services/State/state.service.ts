import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State } from '../../models/State/state';


@Injectable({
  providedIn: 'root',
})
export class StateService {
  private apiUrl = 'http://localhost:5141/api/State';

  constructor(private http: HttpClient) {}

  getStates(): Observable<State[]> {
    return this.http.get<State[]>(`${this.apiUrl}`);
  }

  getState(id: number): Observable<State> {
    return this.http.get<State>(`${this.apiUrl}/${id}`);
  }

  createState(state: State): Observable<State> {
    return this.http.post<State>(this.apiUrl, state);
  }

  updateState(id: number, state: State): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, state);
  }

  deleteState(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

