import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-orders',
  templateUrl: './latest-orders.component.html',
  styleUrls: ['./latest-orders.component.scss'],
})
export class LatestOrdersComponent  implements OnInit {
  @Input() latestOrder : any;
  constructor() { 
    console.log(this.latestOrder)
  }
  
  ngOnInit() {}


}
