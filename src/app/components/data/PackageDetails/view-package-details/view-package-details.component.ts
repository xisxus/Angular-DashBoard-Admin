import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Packagedetails } from '../../../../../models/packagedetails';
import { PackageDetailsService } from '../../../../../services/package-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-package-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './view-package-details.component.html',
  styleUrls: ['./view-package-details.component.css'],
})
export class ViewPackageDetailsComponent implements OnInit, OnDestroy {
  packageDetails!: Packagedetails[];
  private subscription!: Subscription;

  constructor(private packageDetailsService: PackageDetailsService) {}

  ngOnInit(): void {
    this.loadPackageDetails();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  loadPackageDetails(): void {
    this.subscription = this.packageDetailsService
      .getAllPackageDetails()
      .subscribe({
        next: (data: Packagedetails[]) => {
          this.packageDetails = data;
          console.log('Package Details:', this.packageDetails);
        },
        error: (err) => {
          console.error('Error fetching Package Details', err);
        },
      });
  }

  deletePackageDetails(id: number): void {
    if (confirm('Are you sure you want to delete this package details?')) {
      this.packageDetailsService.deletePackageDetails(id).subscribe({
        next: () => {
          this.loadPackageDetails();
        },
        error: (err) => {
          console.error('Error deleting package details', err);
          // Display an error message to the user
          alert('Error deleting package details:' + err.message);
        },
      });
    }
  }
}
