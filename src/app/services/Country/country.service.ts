import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../../models/Country/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'http://localhost:5141/api/Country';  // Replace with your API URL

  constructor(private http: HttpClient) {}

  // GET all countries
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  // GET country by ID
  getCountryById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}/${id}`);
  }

  // POST: add a new country
  addCountry(country: Country): Observable<Country> {
    return this.http.post<Country>(this.apiUrl, country);
  }

  // PUT: update an existing country
  updateCountry(id: number, country: Country): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, country);
  }

  // DELETE a country by ID
  deleteCountry(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
