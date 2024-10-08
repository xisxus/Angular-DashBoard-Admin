import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Add Validators import
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PackageDetailsService } from '../../../../services/PackageDetails/package-details.service';
import { Packagedetails } from '../../../../models/PackageDetails/packagedetails';


@Component({
  selector: 'app-add-package-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-package-details.component.html',
  styleUrl: './add-package-details.component.css',
})
export class AddPackageDetailsComponent implements OnInit {
  packageDetailsForm: FormGroup; // Use FormGroup for package details form

  packId : any

  constructor(
    private fb: FormBuilder,
    private packageDetailsService: PackageDetailsService, // Update to PackageDetailsService
    private router: Router,
    private ac : ActivatedRoute
  ) {
    // Initialize form controls based on Packagedetails interface
    this.packageDetailsForm = this.fb.group({
      //packageID: [null, Validators.required],
      packageDuration: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      pickupPoint: ['', Validators.required],
      maximumPerson: [null, [Validators.required, Validators.min(1)]],
      minimumPerson: [null, [Validators.required, Validators.min(1)]],
      createdAt: [new Date(), Validators.required], // Optional: Can be set by the server
      updatedAt: [new Date(), Validators.required], // Optional: Can be set by the server
    });
  }
  ngOnInit(): void {
    this.packId = this.ac.snapshot.paramMap.get('id')
  }

  onSubmit() {
    if (this.packageDetailsForm.valid) {
      const formData: Packagedetails = this.packageDetailsForm.value;
      this.packageDetailsService.createPackageDetails(this.packId,formData).subscribe({
        next: (response:any) => {
          console.log('Package details added successfully!', response);
          this.packageDetailsForm.reset();
          this.router.navigateByUrl(response.url); // Navigate to package details list or another route
        },
        error: (error:any) => {
          console.error('Error adding package details!', error);
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
