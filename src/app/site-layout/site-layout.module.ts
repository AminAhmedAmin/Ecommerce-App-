import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RouterModule } from '@angular/router';
import { SpinerComponent } from './spiner/spiner.component';
import { SelectComponent } from './select/select.component';
import { CrosalComponent } from './crosal/crosal.component';




@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    BodyComponent,
    SpinerComponent,
    SelectComponent,
    CrosalComponent,


  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    BrowserAnimationsModule,
    CarouselModule,
    RouterModule
  ],

  exports:[HeaderComponent,
    SideBarComponent,
    FooterComponent,
    BodyComponent,
    BrowserAnimationsModule,
    BsDropdownModule,
    CarouselModule,
     RouterModule,
     SpinerComponent,
     SelectComponent,
     CrosalComponent ]
})
export class SiteLayoutModule { }
