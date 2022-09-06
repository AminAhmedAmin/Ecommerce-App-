import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { Product } from '../product';

import { ProductService } from '../product.service';


@Component({
  selector: 'app-view-allproduct',
  templateUrl: './view-allproduct.component.html',
  styleUrls: ['./view-allproduct.component.css']
})
export class ViewAllproductComponent implements OnInit {
  productlist:Product[]=[]
  Id: any;
  catogerylist:Category[]=[]
  louding:boolean;
   cartproducts:any[]=[]



  constructor(private productpervice: ProductService,private activatedroute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      data=>{
        this.Id=data['id'];

      } )

    this.getallcategoury()
    this.viewallproducts()







}

viewallproducts(){
  this.louding=true;
  this.productpervice.viewallproduct().subscribe(
    (data:any) =>{
      console.log(data),
        this. productlist=data;
        this.louding=false;
    },
    error =>{
      alert('error')
      console.log(error.massage)
      this.louding=false;
    })


}

getallcategoury(){
  this.louding=true;
  this.productpervice.getallcategoury().subscribe(
    (data:any) =>{
      console.log(data)
       this.catogerylist=data;
       this.louding=false;
      },erorr =>{
     alert(erorr)
     this.louding=false;
       })
}



Recivevalue(event:any){

  let val=event.target.value;
  if(val=="Categories"){
    this.viewallproducts()
  }else{
    this.getbycatgory(val)
  }



}

getbycatgory(category:string){
  this.louding=true;
  this.productpervice.getcatogery(category).subscribe(
    (data:any) =>{
      console.log(data)
       this.productlist=data;
       this.louding=false;
      },erorr =>{
     alert(erorr)
     this.louding=false;
       })
}


Addtocart(event:any){

  if("cart" in localStorage){
    this.cartproducts=JSON.parse(localStorage.getItem("cart")!)
    let exist= this.cartproducts.find(item =>item.item.id ==event.item.id)
    if(exist){
      alert("product is all ready in your cart")
    }else{
      this.cartproducts.push(event)
      localStorage.setItem("cart",JSON.stringify( this.cartproducts))
    }

  }else
  {
    this.cartproducts.push(event)
    localStorage.setItem("cart",JSON.stringify( this.cartproducts))
  }


}

}
