import { Component, OnInit } from '@angular/core';
import { PackageFoodItem } from '../../../../models/Food/PackageFoodItem';
import { PackageFoodItemsService } from '../../../../services/Food/package-food-items.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-show-packagefooditems',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './show-packagefooditems.component.html',
  styleUrl: './show-packagefooditems.component.css'
})
export class ShowPackagefooditemsComponent implements OnInit {
  packageFoodItems: PackageFoodItem[] = [];
  newFoodItem: PackageFoodItem = {
    mealTypeID: 0,
    foodItemID: 0,
    packageID: 0,
    packageDayNumber: 0,
    foodQuantity: 0,
    foodUnitPrice: 0,
    scheduleTime: new Date()
  };

  constructor(private packageFoodItemService: PackageFoodItemsService) {}
packageID:number=0;
  ngOnInit(): void {
   this. getPackageFoodItems;
  }

  getPackageFoodItems(packageIdInputValue: string): void {
    const packageId = parseInt(packageIdInputValue); // Convert the string to a number
    if (!isNaN(packageId)) { // Ensure it's a valid number
      this.packageFoodItemService.getPackageFoodItems(packageId).subscribe(response => {
        console.log('res1',response);
        
        if (response.success) {
          this.packageFoodItems = response.foodItems.$values;
        }
      });
    } else {
      console.error('Invalid Package ID');
    }
  }
  
}