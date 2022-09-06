import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }
  @Input() data:any;
  @Output() selectetvalue =new EventEmitter()
  @Input() category:boolean =true;
  @Input() select=""

  ngOnInit(): void {
  }


  detectchanges(event:any){
    this.selectetvalue.emit(event)

  }

}
