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
import { ShowMealtypeComponent } from './components/data/mealType/show-mealtype/show-mealtype.component';
import { AddMealTypeComponent } from './components/data/mealType/add-mealtype/add-mealtype.component';
import { UpdateMealTypeComponent } from './components/data/mealType/update-mealtype/update-mealtype.component';
import { ShowFoodItemsComponent } from './components/data/foodItems/show-food-items/show-food-items.component';
import { AddFoodItemComponent } from './components/data/foodItems/add-fooditems/add-fooditems.component';
import { UpdateFoodItemComponent } from './components/data/foodItems/update-fooditems/update-fooditems.component';
import { ShowPackagefooditemsComponent } from './components/data/packagefooditem/show-packagefooditems/show-packagefooditems.component';
import { AddPackagefooditemsComponent } from './components/data/packagefooditem/add-packagefooditems/add-packagefooditems.component';
import { AddPackageTransportationComponent } from './components/data/Transport/packageTransportation/add-package-transportation/add-package-transportation.component';
import { ViewPackageTransportationComponent } from './components/data/Transport/packageTransportation/view-package-transportation/view-package-transportation.component';
import { AddLocationComponent } from './components/data/Location/location/add-location/add-location.component';
import { LocationListComponent } from './components/data/Location/location/location-list/location-list.component';
import { EditLocationComponent } from './components/data/Location/location/edit-location/edit-location.component';
import { LocationGallerylistComponent } from './components/data/Location/location-gallery/location-gallerylist/location-gallerylist.component';
import { AddLocationGalleryComponent } from './components/data/Location/location-gallery/add-location-gallery/add-location-gallery.component';
import { UpdateLocationgalleryComponent } from './components/data/Location/location-gallery/update-locationgallery/update-locationgallery.component';
import { UrlServiceListComponent } from './components/data/UrlService/url-service-list/url-service-list.component';
import { UrlServiceFormComponent } from './components/data/UrlService/url-service-form/url-service-form.component';
import { RequestUrlListComponent } from './components/data/UrlService/request-url-list/request-url-list.component';
import { RequestUrlFormComponent } from './components/data/UrlService/request-url-form/request-url-form.component';
import { EditRequestUrlComponent } from './components/data/UrlService/edit-request-url/edit-request-url.component';
import { EditUrlServiceComponent } from './components/data/UrlService/edit-url-service/edit-url-service.component';



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
  { path: 'schedule/add/:id', component: AddScheduleComponent},
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
  { path: 'delete-type/:id', component: DeleteTransportationTypeComponent },
  

  { path: 'transport-providers', component: ViewTransportProvidersComponent },
  { path: 'transport-providers/add', component: AddTransportProviderComponent },
  { path: 'transport-providers/edit/:id', component: EditTransportProviderComponent },
  { path: 'transport-providers/delete/:id', component: DeleteTransportProviderComponent },


  
 {path:'mealTypes',component:ShowMealtypeComponent},
 {path:'add-mealType',component:AddMealTypeComponent},
 { path: 'update-mealType/:id', component: UpdateMealTypeComponent },
 {path:'foodItems', component:ShowFoodItemsComponent},
 {path:'add-foodItems',component:AddFoodItemComponent},
 { path: 'food-items', component: AddFoodItemComponent },
 { path: 'update-fooditems/:id', component: UpdateFoodItemComponent },

 {path:'packageFoodItemsList',component: ShowPackagefooditemsComponent},
 {path:'add-PackagefoodItems/:id',component:AddPackagefooditemsComponent},
 {path:'add-PackagefoodItems',component:AddPackagefooditemsComponent},
 
 { path: 'package/transportation', component: ViewPackageTransportationComponent },
 { path: 'package/transportation/add', component: AddPackageTransportationComponent },
 { path: 'package/transportation/add/:id', component: AddPackageTransportationComponent },


 { path: 'add-location', component: AddLocationComponent },
  { path: 'location', component: LocationListComponent },
  { path: 'edit-location/:id', component: EditLocationComponent },
  { path: '', redirectTo: '/locations', pathMatch: 'full' },
  {path:'locationGalleryList',component:LocationGallerylistComponent},
  {path:'add-locationGallery',component:AddLocationGalleryComponent},
  {path:'update-LocationGallery/:id',component:UpdateLocationgalleryComponent},


  {path:'url/list',component:UrlServiceListComponent},
  {path:'url/add',component:UrlServiceFormComponent},
  {path:'requesturl/list',component:RequestUrlListComponent},
  {path:'requesturl/add',component:RequestUrlFormComponent},
  {path:'requesturl/edit/:id',component:EditRequestUrlComponent},
  {path:'urlservices/edit/:id',component:EditUrlServiceComponent},


  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
