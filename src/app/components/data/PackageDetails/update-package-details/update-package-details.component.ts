import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PackageDetailsService } from '../../../../../services/package-details.service';
import { Packagedetails } from '../../../../../models/packagedetails';

@Component({
  selector: 'app-update-package-details',
  templateUrl: './update-package-details.component.html',
  styleUrls: ['./update-package-details.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule], // <-- Ensure these are imported for forms
  standalone: true,
})
export class UpdatePackageDetailsComponent implements OnInit {
  packageDetailsForm!: FormGroup; // Declare packageDetailsForm as a FormGroup
  packageDetailsId!: number;

  constructor(
    private fb: FormBuilder,
    private packageDetailsService: PackageDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize the form with controls and validators
    this.packageDetailsForm = this.fb.group({
      packageDuration: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      pickupPoint: ['', Validators.required],
      maximumPerson: [0, [Validators.required, Validators.min(1)]],
      minimumPerson: [0, [Validators.required, Validators.min(1)]],
    });

    // Get the packageDetailsId from the route parameters
    this.packageDetailsId = +this.route.snapshot.paramMap.get('id')!;
    this.loadPackageDetails();
  }

  loadPackageDetails(): void {
    this.packageDetailsService
      .getPackageDetailsByPackageId(this.packageDetailsId)
      .subscribe({
        next: (packageDetails: Packagedetails) => {
          this.packageDetailsForm.patchValue(packageDetails); // Patch the form with fetched data
        },
        error: (err) => {
          console.error('Error fetching package details', err);
        },
      });
  }

  onSubmit(): void {
    if (this.packageDetailsForm.valid) {
      const formData: Packagedetails = {
        ...this.packageDetailsForm.value,
        packageDetailsID: this.packageDetailsId, // Include the ID for the update
      };

      this.packageDetailsService
        .updatePackageDetails(this.packageDetailsId, formData)
        .subscribe({
          next: () => {
            console.log('Package details updated successfully!');
            this.router.navigate(['/package-details']); // Navigate to the package details list
          },
          error: (err) => {
            console.error('Error updating package details', err);
          },
        });
    } else {
      console.log('Form is invalid');
    }
  }
}
