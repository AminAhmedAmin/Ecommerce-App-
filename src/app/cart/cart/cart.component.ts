import { Component, OnInit } from '@angular/core';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproducts: any;
  totalprice:number=0;
  success:boolean;


  constructor(private cartpervice: CartserviceService) { }

  ngOnInit(): void {
    this.getcartproduct();
    this.gettotal();
    this.success=false;
  }



  getcartproduct(){
    if("cart" in localStorage){
      this.cartproducts=JSON.parse(localStorage.getItem("cart")!)

  }
  console.log(this.cartproducts)
                }

  gettotal(){
    this.totalprice=0;

    for(let x in   this.cartproducts){

      this.totalprice+=  this.cartproducts[x].item.price* this.cartproducts[x].quantity

    }
  }


  AddAmount(index:number){
    this.cartproducts[index].quantity++
    this.gettotal();
    localStorage.setItem("cart",JSON.stringify( this.cartproducts))

  }

  minAmount(index:number){
    this.cartproducts[index].quantity--
    this.gettotal();
    localStorage.setItem("cart",JSON.stringify( this.cartproducts))

  }
  dedectchange(){
    localStorage.setItem("cart",JSON.stringify( this.cartproducts))
    this.gettotal();
  }




  delet(index:number){
    this.cartproducts.splice(index,1)
    this.gettotal();
  }

  clear()
   {
    this.cartproducts=[]
    localStorage.setItem("cart",JSON.stringify( this.cartproducts))
    this.gettotal();
   }


   AddCart(){
     let Product =this.cartproducts.map( (item: { item: { id: any; }; quantity: any; }) =>
      {
        return {
          productId:item.item.id,quantity:item.quantity
        }
      })

      let model={
        userId:5,
        date:new Date(),
        products:[Product]
      }
      console.log(model)
      this.cartpervice.addcart(model).subscribe(
        res =>{
          this.success=true;
          this.clear()
        }
      )

   }


}
