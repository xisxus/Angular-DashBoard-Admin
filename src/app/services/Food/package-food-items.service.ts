import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PackageFoodItem } from '../../models/Food/PackageFoodItem';

@Injectable({
  providedIn: 'root'
})
export class PackageFoodItemsService {
  private apiUrl = 'http://localhost:5141/api/Package'; // Update with actual API URL

  constructor(private http: HttpClient) {}

  addPackageFoodItem(foodItem: PackageFoodItem, packageID : number): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-package-food-item/${packageID}`, foodItem);
  }

  // http://localhost:5141/api/Package/add-package-food-item
  getPackageFoodItems(packageId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/get-package-food-items/${packageId}`);
  }
}
