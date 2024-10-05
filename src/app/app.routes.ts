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

import { CountryListComponent } from './components/data/Country/country-list/country-list.component';
import { CountryAddComponent } from './components/data/Country/country-add/country-add.component';
import { CountryEditComponent } from './components/data/Country/country-edit/country-edit.component';

import { StateListComponent } from './components/data/State/state-list/state-list.component';
import { StateCreateComponent } from './components/data/State/state-create/state-create.component';
import { StateEditComponent } from './components/data/State/state-edit/state-edit.component';


import { CostEstimateFormComponentComponent } from './components/data/PackageBudget/cost-estimate-form-component/cost-estimate-form-component.component';
import { GetPackageDetailsComponent } from './components/data/PackageBudget/get-package-details/get-package-details.component';
import { TourVoucherComponent } from './components/data/TourVoucher/tour-voucher/tour-voucher.component';
import { ScheduleListComponent } from './components/data/Schedule/schedule-list/schedule-list.component';
import { AddScheduleComponent } from './components/data/Schedule/add-schedule/add-schedule.component';
import { UpdateScheduleComponent } from './components/data/Schedule/update-schedule/update-schedule.component';
import { FacilityListComponent } from './components/data/Facilities/facility-list/facility-list.component';
import { FacilityCreateComponent } from './components/data/Facilities/facility-create/facility-create.component';
import { FacilityEditComponent } from './components/data/Facilities/facility-edit/facility-edit.component';
import { FacilityDeleteComponent } from './components/data/Facilities/facility-delete/facility-delete.component';
import { AddSeatsComponent } from './components/data/Transport/seats/add-seats/add-seats.component';
import { ViewSeatsComponent } from './components/data/Transport/seats/view-seats/view-seats.component';
import { EditSeatsComponent } from './components/data/Transport/seats/edit-seats/edit-seats.component';
import { DeleteSeatsComponent } from './components/data/Transport/seats/delete-seats/delete-seats.component';
import { ViewTransportationTypesComponent } from './components/data/Transport/transportationType/view-transportation-type/view-transportation-type.component';
import { AddTransportationTypeComponent } from './components/data/Transport/transportationType/add-transportation-type/add-transportation-type.component';
import { EditTransportationTypeComponent } from './components/data/Transport/transportationType/edit-transportation-type/edit-transportation-type.component';
import { DeleteTransportationTypeComponent } from './components/data/Transport/transportationType/delete-transportation-type/delete-transportation-type.component';
import { ViewTransportProvidersComponent } from './components/data/Transport/transportProvider/view-transport-provider/view-transport-provider.component';
import { AddTransportProviderComponent } from './components/data/Transport/transportProvider/add-transport-provider/add-transport-provider.component';
import { EditTransportProviderComponent } from './components/data/Transport/transportProvider/edit-transport-provider/edit-transport-provider.component';
import { DeleteTransportProviderComponent } from './components/data/Transport/transportProvider/delete-transport-provider/delete-transport-provider.component';



export const routes: Routes = [  
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: DisplayUserComponent },  
  { path: 'add-user', component: AddUserComponent }, 
  { path: 'categories', component: ShowCategoryComponent},    
  { path: 'add-category', component: AddCategoryComponent },
  { path: 'update-category/:id', component: UpdateCategoryComponent },
  { path: 'sub-categories', component: ShowSubCategoryComponent },
  { path: 'add-sub-category', component: AddSubCategoryComponent },
  { path: 'update-sub-category/:id', component: UpdateSubCategoryComponent},

  { path: 'countries', component: CountryListComponent },   // GET
  { path: 'countries/add', component: CountryAddComponent },   // POST
  { path: 'countries/edit/:id', component: CountryEditComponent },   // PUT

  { path: 'states', component: StateListComponent },
  { path: 'states/create', component: StateCreateComponent },
  { path: 'states/edit/:id', component: StateEditComponent },


  { path: 'package/addBudget', component: CostEstimateFormComponentComponent},
  { path: 'package/addBudget/:id', component: GetPackageDetailsComponent},
  { path: 'package/voucher', component: TourVoucherComponent},
  { path: 'schedule', component: ScheduleListComponent},
  { path: 'schedule/add', component: AddScheduleComponent},
  { path: 'schedule/edit/:id', component: UpdateScheduleComponent},
  



  { path: 'facility', component: FacilityListComponent },
  { path: 'facility/create', component: FacilityCreateComponent },
  { path: 'facility/edit/:id', component: FacilityEditComponent },



  { path: 'add-seats', component: AddSeatsComponent },
  { path: 'view-seats', component: ViewSeatsComponent },
  { path: 'edit-seats/:id', component: EditSeatsComponent }, // Dynamic route for editing seat by ID
  { path: 'delete-seats/:id', component: DeleteSeatsComponent }, // Dynamic route for deleting seat by ID

    

  { path: 'transportation-types', component: ViewTransportationTypesComponent },
  { path: 'transportation-types/add', component: AddTransportationTypeComponent },
  { path: 'transportation-types/edit/:id', component: EditTransportationTypeComponent },
  { path: 'delete-transportation-type/:id', component: DeleteTransportationTypeComponent },
  

  { path: 'transport-providers', component: ViewTransportProvidersComponent },
  { path: 'transport-providers/add', component: AddTransportProviderComponent },
  { path: 'transport-providers/edit/:id', component: EditTransportProviderComponent },
  { path: 'transport-providers/delete/:id', component: DeleteTransportProviderComponent },



  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
