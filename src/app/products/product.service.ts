import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Category } from './category';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient :HttpClient) { }


  createproduct(productBody:Product)
  {


    return this.httpclient.post<Product>(environment.baseturl+"products",productBody)
  }
  viewallproduct()
  {


    return this.httpclient.get<Product>(environment.baseturl+"products")
  }

  viewproduct(productid:Observable<Product>)
  {

    return this.httpclient.get(environment.baseturl+"products/"+productid)
  }





  


getallcategoury(){

  return this.httpclient.get<Product>(environment.baseturl+"products/categories")
}

  getcatogery(category:string)
  {

    return this.httpclient.get<Product>(environment.baseturl+"products/category/"+category)
  }
}
