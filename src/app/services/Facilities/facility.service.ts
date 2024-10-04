import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facility } from '../../models/Facilities/Facility';


@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private apiUrl = 'http://localhost:5141/api/Facilities'; 

  constructor(private http: HttpClient) { }

  // GET: Retrieve all facilities
  getFacilities(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.apiUrl);
  }

  // GET: Retrieve a specific facility by ID
  getFacility(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${this.apiUrl}/${id}`);
  }

  // POST: Add a new facility
  createFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(this.apiUrl, facility);
  }

  // PUT: Update an existing facility
  updateFacility(id: number, facility: Facility): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, facility);
  }

  // DELETE: Remove a facility
  deleteFacility(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
