import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  constructor(  private httpclient: HttpClient) { }



  addcart(model:any)
  {


    return this.httpclient.post(environment.baseturl +"carts",model)
  }
}
