import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/products/product';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-aproducts',
  templateUrl: './aproducts.component.html',
  styleUrls: ['./aproducts.component.css']
})
export class AproductsComponent implements OnInit {


  products:Product[] = [];
  categories:string[] = [];
  loading:boolean = false;
  base64:any = '';
  form!:FormGroup
  constructor(private service:ProductService , private build:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['' , [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })
    this.getProducts()
    this.getCategories()
  }




  getProducts() {
    this.loading = true
    this.service.viewallproduct().subscribe((res:any) => {
      this.products = res
      this.loading = false
     } , error => {
      this.loading = false
      alert( error)
     }   )
  }

  getCategories() {
    this.service.getallcategoury().subscribe((res:any) => {
      this.categories = res
     } , error => {
      alert( error)
     })
  }

  getSelectedCategory(event:any) {
    this.form.get('category')?.setValue(event.target.value)
    console.log(this.form)
  }





  getImagePath(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
       this.base64 = reader.result;
       this.form.get('image')?.setValue(this.base64)
       console.log(this.base64)
    };
  }


  addProduct() {
    const model = this.form.value
    this.service.createproduct(model).subscribe(res => {
      alert("Add Product Success")
    })
  }

  update(item:any) {
    this.form.patchValue({
      title: item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category
    })
    this.base64 = item.image
  }

}
