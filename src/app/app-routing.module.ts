import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbourdComponent } from './Admin/dashbourd/dashbourd.component';
import { CartComponent } from './cart/cart/cart.component';





import { ViewAllproductComponent } from './products/view-allproduct/view-allproduct.component';





const routes: Routes = [
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'admin', loadChildren: () => import('./Admin/admin.module').then(m => m.AdminModule) },

  {path: '',component:ViewAllproductComponent },
     
     {path: 'cart',component:CartComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
