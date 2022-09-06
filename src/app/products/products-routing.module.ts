import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductsComponent } from './products.component';

import { ViewAllproductComponent } from './view-allproduct/view-allproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';



const routes: Routes = [

  { path: '', component: ProductsComponent },



  // { path: 'search', component:ViewAllproductComponent },
 


  { path: 'viewproduct/:id', component: ViewproductComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
