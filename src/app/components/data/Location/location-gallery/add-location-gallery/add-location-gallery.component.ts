import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LocationGalleryInsertModel } from '../../../../../models/Location model/LocationGalleryInsertModel';
import { LocationGalleryService } from '../../../../../services/Location/location-gallery.service';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../../../../services/Location/location.service';

@Component({
  selector: 'app-add-location-gallery',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './add-location-gallery.component.html',
  styleUrl: './add-location-gallery.component.css'
})
export class AddLocationGalleryComponent implements OnInit {
  galleryForm: FormGroup;
  selectedFile: File | null = null;
  isEditMode: boolean = false;
  editGalleryId: number | null = null;


  locations: any[] = [];



  ngOnInit(): void {
    this.loadLocations();
  }

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



  constructor(private fb: FormBuilder, private locationGalleryService: LocationGalleryService,
    private locationService: LocationService
  ) {
    this.galleryForm = this.fb.group({
      isPrimary: [false, Validators.required],
      imageCaption: ['', Validators.required],
      locationID: [null, Validators.required],
      imageFile: [null, Validators.required]
    });
  }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.galleryForm.patchValue({
        imageFile: this.selectedFile
      });
    }
  }

  submitGallery(): void {
    const galleryModel: LocationGalleryInsertModel = {
      isPrimary: this.galleryForm.get('isPrimary')?.value,
      imageCaption: this.galleryForm.get('imageCaption')?.value,
      locationID: this.galleryForm.get('locationID')?.value,
      imageFile: this.selectedFile
    };

    if (this.isEditMode && this.editGalleryId) {
      // Update existing gallery
      this.locationGalleryService.updateGallery(this.editGalleryId, galleryModel).subscribe(() => {
        alert('Gallery updated successfully');
        this.resetForm();
      });
    } else {
      // Add new gallery
      this.locationGalleryService.addGallery(galleryModel).subscribe(() => {
        alert('Gallery added successfully');
        this.resetForm();
      });
    }
  }

  editGallery(galleryId: number, galleryData: LocationGalleryInsertModel): void {
    this.isEditMode = true;
    this.editGalleryId = galleryId;
    this.galleryForm.patchValue({
      isPrimary: galleryData.isPrimary,
      imageCaption: galleryData.imageCaption,
      locationID: galleryData.locationID,
      imageFile: galleryData.imageFile // Handle this carefully as File is not directly patchable
    });
  }

  resetForm(): void {
    this.isEditMode = false;
    this.editGalleryId = null;
    this.selectedFile = null;
    this.galleryForm.reset();
  }
}