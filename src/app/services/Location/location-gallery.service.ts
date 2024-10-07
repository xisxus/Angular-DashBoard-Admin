import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationGallery } from '../../models/Location model/LocationGallery';
import { LocationGalleryInsertModel } from '../../models/Location model/LocationGalleryInsertModel';
import { LocationGalleryResponse } from '../../models/Location model/LocationGalleryResponse ';

@Injectable({
  providedIn: 'root'
})
export class LocationGalleryService {
  private apiUrl = 'http://localhost:5141/api/LocationGallery'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}


  
  getGalleriesByLocationId(locationId: number): Observable<LocationGalleryResponse> {
    return this.http.get<LocationGalleryResponse>(`${this.apiUrl}/location/${locationId}`);
  }
  // Add new gallery
  addGallery(model: LocationGalleryInsertModel): Observable<LocationGallery> {
    const formData = new FormData();
    formData.append('isPrimary', model.isPrimary.toString());
    formData.append('imageCaption', model.imageCaption);
    formData.append('locationID', model.locationID.toString());
    if (model.imageFile) {
      formData.append('imageFile', model.imageFile, model.imageFile.name);
    }

    return this.http.post<LocationGallery>(this.apiUrl, formData);
  }

  updateGallery(id: number, model: LocationGalleryInsertModel): Observable<LocationGallery> {  // Change to Observable<LocationGallery>
    const formData = new FormData();
    formData.append('isPrimary', model.isPrimary.toString());
    formData.append('imageCaption', model.imageCaption);
    formData.append('locationID', model.locationID.toString());
    if (model.imageFile) {
      formData.append('imageFile', model.imageFile, model.imageFile.name);
    }
  
    return this.http.put<LocationGallery>(`${this.apiUrl}/${id}`, formData);  // Use correct return type
  }
  


  // Delete gallery
  deleteGallery(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
