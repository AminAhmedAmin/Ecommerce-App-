import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Output() svalue =new EventEmitter()

  ngOnInit(): void {
  }

  click(event:any){
  
    this.svalue.emit(event)

  }


}
