import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadingt-orders',
  templateUrl: './loadingt-orders.component.html',
  styleUrls: ['./loadingt-orders.component.scss'],
})
export class LoadingtOrdersComponent  implements OnInit {
  dummy = Array(10)
  constructor() { }

  ngOnInit() {}

}
