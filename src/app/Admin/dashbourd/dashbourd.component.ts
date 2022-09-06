import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/products/product.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashbourd',
  templateUrl: './dashbourd.component.html',
  styleUrls: ['./dashbourd.component.css']
})
export class DashbourdComponent implements OnInit {
  carts: any;
  form!:FormGroup;
  products: any[]=[];
  details: any;

  constructor( private service :AdminService , private build:FormBuilder ,private productpervice: ProductService) { }

  ngOnInit(): void {
    this.form = this.build.group({
      start: [''],
      end:['']
    })
    this.getAllCarts()


      }

  getAllCarts() {
    this.service.getAllCarts().subscribe((res:any) => {
      this.carts = res
    })
  }



  applyFilter(){
    let date = this.form.value
    this.service.getAllCarts(date).subscribe((res:any) => {
      this.carts = res
    })
  }


  deleteCart(id:number) {
    this.service.deleteCart(id).subscribe(res => {
      this.getAllCarts()
      alert("Cart deleted Success")
    })}



    view(index:number) {
      this.products = []
      this.details = this.carts[index];
      for(let x in this.details.products) {
        this.productpervice .viewproduct(this.details.products[x].productId).subscribe(res => {
          this.products.push({item: res , quantity:this.details.products[x].quantity})
        })
      }
      console.log(this.details)
    }
}
