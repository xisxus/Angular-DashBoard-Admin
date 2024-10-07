import { Component, OnInit } from '@angular/core';
import { LocationGallery } from '../../../../../models/Location model/LocationGallery';
import { LocationGalleryService } from '../../../../../services/Location/location-gallery.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LocationService } from '../../../../../services/Location/location.service';

@Component({
  selector: 'app-location-gallerylist',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './location-gallerylist.component.html',
  styleUrls: ['./location-gallerylist.component.css'] // Corrected styleUrls typo
})
export class LocationGallerylistComponent implements OnInit {
  locationGalleries: LocationGallery[] = [];
  selectedLocationId: number = 0; // If you want a default location ID
  imageUrl: string = '';  // Declare a variable for the image URL
  backendUrl: string = 'http://localhost:5141'; // Define backend server URL
  constructor(private locationGalleryService: LocationGalleryService, private locationService: LocationService) {}

  ngOnInit(): void {
    // If you have a default location ID, call the function with the default value.
    this.getGalleriesByLocationId(this.selectedLocationId.toString()); 
    this.loadLocations();
  }


  locations: any[] = [];

  

 

  loadLocations(): void {
    this.locationService.getLocations().subscribe(
      (data) => {
        this.locations = data['$values']; // Assuming the API returns an array of locations
        console.log(data);
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }








  getGalleriesByLocationId(locationIdInputValue: string): void {
    const locationId = parseInt(locationIdInputValue, 10); // Convert input string to number
  
    if (!isNaN(locationId) && locationId > 0) {
      this.locationGalleryService.getGalleriesByLocationId(locationId).subscribe(response => {
        console.log('API Response:', response);
  
        if (response.$values && Array.isArray(response.$values)) {
          this.locationGalleries = response.$values;
  
          if (this.locationGalleries.length > 0 && this.locationGalleries[0].imageUrl) {
           
            const imageFileName = this.locationGalleries[0].imageUrl;
           
            this.imageUrl = `${this.backendUrl}${imageFileName}`; 
          } else {
            console.log('No imageUrl found in the response.');
            this.imageUrl = '';  
          }
        } else {
          console.log('No galleries found for this location.');
          this.locationGalleries = [];
        }
      });
    } else {
      console.error('Invalid Location ID');
    }
  }
  
  
    onDelete(id: number, locationIdInputValue: string): void {
    if (confirm('Are you sure you want to delete this gallery?')) {
      this.locationGalleryService.deleteGallery(id).subscribe(() => {
        console.log('Gallery deleted successfully');
        this.getGalleriesByLocationId(locationIdInputValue); // Refresh the gallery list
      });
    }
  }
}
 

