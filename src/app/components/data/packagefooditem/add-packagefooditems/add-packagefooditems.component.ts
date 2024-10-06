import { Component, OnInit } from '@angular/core';
import { PackageFoodItem } from '../../../../models/Food/PackageFoodItem';
import { PackageFoodItemsService } from '../../../../services/Food/package-food-items.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealTypeService } from '../../../../services/Food/meal-type.service';
import { MealType } from '../../../../models/Food/meal-type';
import { FoodItem } from '../../../../models/Food/FoodItem';
import { FoodItemsService } from '../../../../services/Food/food-items.service';

@Component({
  selector: 'app-add-packagefooditems',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-packagefooditems.component.html',
  styleUrl: './add-packagefooditems.component.css'
})
export class AddPackagefooditemsComponent  implements OnInit {
  packageFoodItems: PackageFoodItem[] = [];
  mealTypes: MealType[] = [];
  foodItems: FoodItem[] = [];
  allFood: any[] = [];
  newFoodItem: PackageFoodItem = {
    mealTypeID: 0,
    foodItemID: 0,
    packageID: 0,
    packageDayNumber: 0,
    foodQuantity: 0,
    foodUnitPrice: 0,
    scheduleTime: new Date()
  };

  packageID: number = 0;

  constructor(private packageFoodItemService: PackageFoodItemsService,private mealTypeService: MealTypeService,private foodItemsService: FoodItemsService) {}

  ngOnInit(): void {
    // You should bind the method correctly with parentheses
    this.getPackageFoodItems(String(this.packageID));
    this.getMealTypes();
    this.getAllFoodItems();
  }

  addPackageFoodItem(): void {
    if (this.newFoodItem.mealTypeID === 0 || this.newFoodItem.foodItemID === 0) {
      alert('Meal Type ID and Food Item ID cannot be null');
      return;
    }

    this.packageFoodItemService.addPackageFoodItem(this.newFoodItem).subscribe(
      response => {
        console.log(response);

        if (response.success) {
          alert('Package food item added successfully');
          // Re-fetch the updated list of food items after adding
          this.getPackageFoodItems(String(this.newFoodItem.packageID));
          this.resetForm(); // Optional: reset the form after adding
        } else {
          alert('Error: ' + response.message);
        }
      },
      error => {
        console.error('Error adding package food item:', error);
      }
    );
  }

  getPackageFoodItems(packageIdInputValue: string): void {
    const packageId = parseInt(packageIdInputValue); // Convert the string to a number
    if (!isNaN(packageId)) {
      this.packageFoodItemService.getPackageFoodItems(packageId).subscribe(
        response => {
          console.log('res1', response);

          if (response.success) {
            this.packageFoodItems = response.foodItems.$values;
          }
        },
        error => {
          console.error('Error fetching package food items:', error);
        }
      );
    } else {
      console.error('Invalid Package ID');
    }
  }

  // Optionally reset the form fields after adding a food item
  resetForm(): void {
    this.newFoodItem = {
      mealTypeID: 0,
      foodItemID: 0,
      packageID: this.packageID,
      packageDayNumber: 0,
      foodQuantity: 0,
      foodUnitPrice: 0,
      scheduleTime: new Date()
    };
  }


  getMealTypes(): void {
    this.mealTypeService.getMealTypes().subscribe((response: any) => {
      
      
      this.mealTypes = response.$values;  // Map to the $values array
      console.log('res', this.mealTypes);
      
    });
  }
  getAllFoodItems(): void {
    this.foodItemsService.getAllFoodItems().subscribe((response: any) => {
      console.log(response); // Log the response to check the structure
      this.foodItems = response.$values; // Map the response to $values if applicable
    });
  }

}





