import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproductsComponent } from '../aproducts/aproducts.component';
import { DashbourdComponent } from '../dashbourd/dashbourd.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [

  { path: 'dashbourd', component:DashbourdComponent },
  { path: 'all', component:AproductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
