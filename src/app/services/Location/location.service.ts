import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationInsertModel } from '../../models/Location model/location-insert-model';


@Injectable({
  providedIn: 'root'
})
export class LocationService {
 
  private apiUrl = 'http://localhost:5141/api/Location'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  addLocation(location: LocationInsertModel): Observable<any> {
    return this.http.post<any>(this.apiUrl, location);
  }

  updateLocation(id: number, location: LocationInsertModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, location);
  }

  deleteLocation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getLocations(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getLocationById(id: number) {
    return this.http.get(`http://localhost:5141/api/Location/${id}`);
  }
}
