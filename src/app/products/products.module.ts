import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';




import { ViewAllproductComponent } from './view-allproduct/view-allproduct.component';


import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SiteLayoutModule } from '../site-layout/site-layout.module';
import { ProuductComponent } from './prouduct/prouduct.component';



@NgModule({
  declarations: [
    ProductsComponent,




    ViewAllproductComponent,
   
    ViewproductComponent,
    ProuductComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CarouselModule,FormsModule,
    ProductsRoutingModule,
    RouterModule,
    SiteLayoutModule,



  ],
  exports:[ CommonModule,
    ProductsRoutingModule,
    CarouselModule,FormsModule,
    ProductsRoutingModule,
    RouterModule]

})
export class ProductsModule { }
