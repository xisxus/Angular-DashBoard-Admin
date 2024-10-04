import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { DisplayUserComponent } from './components/data/user/display-user/display-user.component';
import { AddUserComponent } from './components/data/user/add-user/add-user.component';
import { AddCategoryComponent } from './components/data/tour-package/package-category/add-category/add-category/add-category.component';
import { ShowCategoryComponent } from './components/data/tour-package/package-category/show-category/show-category.component';
import { UpdateCategoryComponent } from './components/data/tour-package/package-category/update-category/update-category.component';
import { ShowSubCategoryComponent } from './components/data/tour-package/package-sub-category/show-sub-category/show-sub-category.component';
import { AddSubCategoryComponent } from './components/data/tour-package/package-sub-category/add-sub-category/add-sub-category.component';
import { UpdateSubCategoryComponent } from './components/data/tour-package/package-sub-category/update-sub-category/update-sub-category.component';
import { CostEstimateFormComponentComponent } from './components/data/PackageBudget/cost-estimate-form-component/cost-estimate-form-component.component';
import { GetPackageDetailsComponent } from './components/data/PackageBudget/get-package-details/get-package-details.component';
import { TourVoucherComponent } from './components/data/TourVoucher/tour-voucher/tour-voucher.component';
import { ScheduleListComponent } from './components/data/Schedule/schedule-list/schedule-list.component';
import { AddScheduleComponent } from './components/data/Schedule/add-schedule/add-schedule.component';
import { UpdateScheduleComponent } from './components/data/Schedule/update-schedule/update-schedule.component';


export const routes: Routes = [  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: DisplayUserComponent },  
  { path: 'add-user', component: AddUserComponent }, 
  {path: 'categories', component: ShowCategoryComponent},    
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'sub-categories', component: ShowSubCategoryComponent },
  { path: 'add-sub-category', component: AddSubCategoryComponent },
  { path: 'update-sub-category/:id', component: UpdateSubCategoryComponent},
  { path: 'package/addBudget', component: CostEstimateFormComponentComponent},
  { path: 'package/addBudget/:id', component: GetPackageDetailsComponent},
  { path: 'package/voucher', component: TourVoucherComponent},
  { path: 'schedule', component: ScheduleListComponent},
  { path: 'schedule/add', component: AddScheduleComponent},
  { path: 'schedule/edit/:id', component: UpdateScheduleComponent},
 
 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
