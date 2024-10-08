import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRequestUrlDto, CreateUrlServiceDto, RequestUrlDto, UrlServiceDto } from '../../models/UrlService/url-service-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UrlServiceService {
  private apiUrl = 'http://localhost:5141/api/UrlService';  // Replace with your API base URL

  constructor(private http: HttpClient) {}

  // Get all UrlServices
  getUrlServices(): Observable<UrlServiceDto[]> {
    return this.http.get<UrlServiceDto[]>(`${this.apiUrl}/urlservices`);
  }

  // Get UrlService by ID
  getUrlService(id: number): Observable<UrlServiceDto> {
    return this.http.get<UrlServiceDto>(`${this.apiUrl}/urlservices/${id}`);
  }

  // Create a new UrlService
  createUrlService(createUrlServiceDto: CreateUrlServiceDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/urlservices`, createUrlServiceDto);
  }

  // Update an existing UrlService
  updateUrlService(id: number, updateUrlServiceDto: CreateUrlServiceDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/urlservices/${id}`, updateUrlServiceDto);
  }

  // Delete a UrlService
  deleteUrlService(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/urlservices/${id}`);
  }

  // Get all RequestUrls
  getRequestUrls(): Observable<RequestUrlDto[]> {
    return this.http.get<RequestUrlDto[]>(`${this.apiUrl}/requesturls`);
  }

  // Get RequestUrl by ID
  getRequestUrl(id: number): Observable<RequestUrlDto> {
    return this.http.get<RequestUrlDto>(`${this.apiUrl}/requesturls/${id}`);
  }

  // Create a new RequestUrl
  createRequestUrl(createRequestUrlDto: CreateRequestUrlDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/requesturls`, createRequestUrlDto);
  }

  // Update an existing RequestUrl
  updateRequestUrl(id: number, updateRequestUrlDto: CreateRequestUrlDto): Observable<any> {
    return this.http.put(`${this.apiUrl}/requesturls/${id}`, updateRequestUrlDto);
  }

  // Delete a RequestUrl
  deleteRequestUrl(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/requesturls/${id}`);
  }
}
