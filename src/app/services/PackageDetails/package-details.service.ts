import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Packagedetails } from '../../models/PackageDetails/packagedetails';

@Injectable({
  providedIn: 'root',
})
export class PackageDetailsService {
  private apiUrl = 'http://localhost:5141/api/Package';

  constructor(private http: HttpClient) {}

  // Create new package details
  createPackageDetails(
    packageId: number, // Added parameter for package ID
    packageDetails: Packagedetails
  ): Observable<Packagedetails> {
    return this.http.post<Packagedetails>(`${this.apiUrl}/details/add/${packageId}`, packageDetails);
  }

  // Fetch all package details
  getAllPackageDetails(): Observable<Packagedetails[]> {
    return this.http.get<Packagedetails[]>(
      `${this.apiUrl}/get-package-details`
    );
  }

  // Fetch package details by ID
  getPackageDetailsByPackageId(id: number): Observable<Packagedetails> {
    return this.http.get<Packagedetails>(
      `${this.apiUrl}/get-package-details/${id}`
    );
  }

  // Update package details by ID
  updatePackageDetails(
    id: number,
    packageDetails: Packagedetails
  ): Observable<Packagedetails> {
    return this.http.put<Packagedetails>(
      `${this.apiUrl}/update-package-details/${id}`,
      packageDetails
    );
  }

  // Delete package details by ID
  deletePackageDetails(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-package-details/${id}`);
  }
}
