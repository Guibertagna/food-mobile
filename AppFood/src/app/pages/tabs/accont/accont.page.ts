import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accont',
  templateUrl: './accont.page.html',
  styleUrls: ['./accont.page.scss'],
})
export class AccontPage implements OnInit {
  
  latestOrders : any [] = [];
  isLoading: boolean = false;


  constructor() { }

  ngOnInit() {
      
      this.isLoading = true;
 
     setTimeout(()=>{
      this.latestOrders = [
        {
          uid : '01',
          name_restaurant : 'Dom herinque',
          status : 'Entregue',
          place:'Guarapuava, Paraná',
          price : 60,
          date: 'Janeiro, 26, 24',
          items:[
            'Pizza 2x',
            ' Burguer 2x',
          ]
          
        },
        {
          uid : '02',
          name_restaurant : 'Dom herinque',
          status : 'Entregue',
          place:'Cambira, Paraná',
          price : 80,
          date: 'Janeiro 30, 24',
          items:[
            'Pizza 3x',
            ' Burguer 2x',
          ]
          
        },
        {
          uid : '03',
          name_restaurant : 'Dom herinque2',
          status : 'Cancelado',
          place:'Guarapuava, Paraná',
          price : 150,
          date: 'Março 05, 24',
          items:[
            'Pizza 3x',
            ' Carne 1x ',
          ]
          
        },
      ];
      
      this.isLoading = false;

     },3000)

  }

}
