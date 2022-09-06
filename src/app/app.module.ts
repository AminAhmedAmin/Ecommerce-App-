import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OrdersModule } from './orders/orders/orders.module';
import { ProductsRoutingModule } from './products/products-routing.module';
import { ProductsModule } from './products/products.module';
import { SiteLayoutModule } from './site-layout/site-layout.module';
import{HttpClientModule}from'@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart/cart.component';
import { DashbourdComponent } from './Admin/dashbourd/dashbourd.component';



import { AdminModule } from './Admin/admin.module';
import { AproductsComponent } from './Admin/aproducts/aproducts.component';




@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    DashbourdComponent,


   
    AproductsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
   HttpClientModule,
    ProductsRoutingModule,
    ProductsModule,
    SiteLayoutModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ProductsRoutingModule, CommonModule,
    RouterModule,
    AdminModule,
    ReactiveFormsModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
