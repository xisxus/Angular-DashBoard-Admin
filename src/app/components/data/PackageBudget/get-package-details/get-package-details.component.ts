import { Component, OnInit } from '@angular/core';
import { GetPackageBudget } from '../../../../models/PackageBudget/get-package-budget';
import { ActivatedRoute } from '@angular/router';
import { PackageBudgetService } from '../../../../services/PackageBudget/package-budget.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-get-package-details',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './get-package-details.component.html',
  styleUrl: './get-package-details.component.css'
})
export class GetPackageDetailsComponent implements OnInit {

  package: GetPackageBudget | undefined;
  showOtherCostInput: boolean = false;
  updatedOtherCost: number = 0;  // Default value set to 0

  constructor(
    private route: ActivatedRoute,
    private packageBudgetService: PackageBudgetService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const packageID = Number(params.get('id'));
      if (packageID) {
        this.packageBudgetService.getPackageById(packageID).subscribe(
           (data: GetPackageBudget) => {
            this.package = data;
            this.updatedOtherCost = data.otherCost || 0;  // Default to 0 if otherCost is undefined
          },
          error => console.error(error)
        );
      }
    });
  }

  toggleOtherCostInput(): void {
    this.showOtherCostInput = !this.showOtherCostInput;
  }

  updateOtherCost(): void {
    if (this.package && this.updatedOtherCost !== undefined) {
      this.packageBudgetService.updateOtherCost(this.package.packageID, this.updatedOtherCost)
        .subscribe(
          () => {
            // Update the local package object with the new other cost
            if (this.package) {
              this.package.otherCost = this.updatedOtherCost;
            }
            this.showOtherCostInput = false;  
          },
          error => console.error(error)
        );
    }
  }
}


