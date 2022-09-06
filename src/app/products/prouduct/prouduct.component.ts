import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prouduct',
  templateUrl: './prouduct.component.html',
  styleUrls: ['./prouduct.component.css']
})
export class ProuductComponent implements OnInit {


  constructor(private activatedroute:ActivatedRoute ) { }
  addbuttun:boolean;
  Amount:number=0
  @Input() data:any={};
@Output() item =new EventEmitter()
Id: any;

  ngOnInit(): void {
    this.activatedroute.params.subscribe(
      res=>{

        this.Id=res['id'];
        console.log(this.Id)

      } )

  }


  Addtocart(){
   this.item.emit({item:this.data,quantity:this.Amount})
  }
}
