import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-empty-orders',
  templateUrl: './empty-orders.component.html',
  styleUrls: ['./empty-orders.component.scss'],
})
export class EmptyOrdersComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  goToHome() {
    this.router.navigate(['/tabs/home']);
  }
  

}
