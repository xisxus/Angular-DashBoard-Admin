import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { PackageTransportationService } from '../../../../../services/Transport/package-transportation.service';
import { FormsModule } from '@angular/forms';

import { TransportationCatagory } from '../../../../../models/Transport/transportation-catagory';
import { TransportationTypeService } from '../../../../../services/Transport/transportation-type.service';
import { TransportationCategoryService } from '../../../../../services/Transport/transportation-category.service';

@Component({
  selector: 'app-add-package-transportation',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './add-package-transportation.component.html',
  styleUrl: './add-package-transportation.component.css'
})


export class AddPackageTransportationComponent implements OnInit {
  transportationTypes: any[] = []; 
  transportationCategories: any[] = []; 
  newTransportationItem: any = { 
    packageID: 0,
    transportationTypeID: 0,
    transportationCatagoryID: 0,
    transportationID: 0,
    seatBooked: 0,
    packageTransportationDescription: '',
    perHeadTransportCost: 0,
  };

  packageID: number = 0; 

  constructor(private cataService : TransportationCategoryService ,private packageTransportationService: PackageTransportationService , private typeservice: TransportationTypeService) {}

  ngOnInit(): void {
    this.getTransportationTypes(); 
  this.getTransportationCategories(); 
  //this.getPackageTransportations(String(this.packageID)); 
  }

  addPackageTransportation(): void {
    if (this.newTransportationItem.transportationTypeID === 0 || this.newTransportationItem.transportationID === 0) {
      alert('Transportation Type ID and Transportation ID cannot be null');
      return;
    }

    this.packageTransportationService.createPackageTransportation(this.newTransportationItem).subscribe(
      (response:any) => {
        console.log(response);

        if (response.success) {
          alert('Package transportation added successfully');
          this.resetForm(); 
        } else {
          alert('Error: ' + response.message);
        }
      },
      error => {
        console.error('Error adding package transportation:', error);
      }
    );
  }
  

  // Optionally reset the form fields after adding a transportation item
  resetForm(): void {
    this.newTransportationItem = {
      packageID: this.packageID,
      transportationTypeID: 0,
      transportationCatagoryID: 0,
      transportationID: 0,
      seatBooked: 0,
      packageTransportationDescription: '',
      perHeadTransportCost: 0,
    };
  }

  getTransportationTypes(): void {
    
    this.typeservice.getAllTypes().subscribe((response: any) => {
     // console.log(response);
      
      this.transportationTypes = response.data.$values; 
      //console.log('Transportation Types:', this.transportationTypes);
    });
  }

  getTransportationCategories(): void {
    
    this.cataService.getTransportationCategories().subscribe((response: any) => {
      console.log(response);
      
      this.transportationCategories = response.data.$values; // Adjust based on your API response structure
      console.log('Transportation Categories:', this.transportationCategories);
    });
  }
}