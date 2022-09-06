import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/products/category';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  catogerylist: any;

  constructor(private productpervice: ProductService) { }

  ngOnInit(): void {




  }




  
}



