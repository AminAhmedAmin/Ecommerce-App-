import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  productid: any;
  productlist: any;

  constructor(private activatedroute:ActivatedRoute,private prouductservice:ProductService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      data=>{
        this.productid=data['id'];
        console.log(this.productid)
      } )


      this.prouductservice.viewproduct( this.productid).subscribe(
        productdata=>{
          this.productlist = productdata;
          console.log(this.productlist)
        } )
  }

}
