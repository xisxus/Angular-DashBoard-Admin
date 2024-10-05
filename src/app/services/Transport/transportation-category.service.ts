import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransportationCatagory } from '../../models/Transport/transportation-catagory';


// import { TransportationCategory } from '../models/transportation-category.model';

@Injectable({
  providedIn: 'root'
})
export class TransportationCategoryService {
  private baseUrl = 'http://localhost:5141/api/TransportationCatagory';  // Adjust base URL

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getTransportationCategories(): Observable<TransportationCatagory[]> {
    return this.http.get<TransportationCatagory[]>(this.baseUrl, this.httpOptions);
  }

  getTransportationCategoryById(id: number): Observable<TransportationCatagory> {
    return this.http.get<TransportationCatagory>(`${this.baseUrl}/${id}`, this.httpOptions);
  }

  createTransportationCategory(category: TransportationCatagory): Observable<TransportationCatagory> {
    return this.http.post<TransportationCatagory>(this.baseUrl, category, this.httpOptions);
  }

  updateTransportationCategory(id: number, category: TransportationCatagory): Observable<TransportationCatagory> {
    return this.http.put<TransportationCatagory>(`${this.baseUrl}/${id}`, category, this.httpOptions);
  }

  deleteTransportationCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`, this.httpOptions);
  }
}
