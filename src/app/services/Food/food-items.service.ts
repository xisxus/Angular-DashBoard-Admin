import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { FoodItemInputModel } from '../../models/Food/FoodItemInputModel ';
import { FoodItem } from '../../models/Food/FoodItem';
import { FoodItemOutputModel } from '../../models/Food/FoodItemOutputModel ';


@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {
 
  private apiUrl = 'http://localhost:5141/api/FoodItems'; 
  foodItemsService: any;
  foodItem!: FoodItem;

  constructor(private http: HttpClient) {}

  getAllFoodItems(): Observable<FoodItemOutputModel[]> {
    return this.http.get<{ success: boolean; data: FoodItemOutputModel[] }>(this.apiUrl)
      .pipe(
        map(response => {
          if (response.success) {
            return response.data; // Ensure this is an array
          } else {
            return []; // Return an empty array if the response is not successful
          }
        })
      );
  }

  deleteFoodItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }


 

  createFoodItem(model: FoodItemInputModel, customUrl?: string): Observable<FoodItem> {
    const url = `${`http://localhost:5141/api/FoodItems/add-fooditem`}${customUrl ? '?customUrl=' + customUrl : ''}`;
    return this.http.post<FoodItem>(url, model).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMsg = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          if (error.status === 0) {
            errorMsg = 'Unable to reach the API. Please check the server or network.';
          } else {
            errorMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
        }
        return throwError(() => new Error(errorMsg));
        
      })
    );
  }
  
  // Get food item by ID
  getFoodItem(id: number): Observable<FoodItem> {
    return this.http.get<FoodItem>(`${this.apiUrl}/${id}`);
  }

  // Update food item by ID
  updateFoodItem(id: number, foodItem: FoodItemInputModel): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, foodItem);
  }
}
