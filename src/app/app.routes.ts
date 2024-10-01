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
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
