import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css'],
  animations: [
    trigger('spoonAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('100ms', [
          animate('1s', style({ opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ],

})
export class AdvancedComponent implements OnInit {

  spoons = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  showSpoons() {
    // this.spoons = [
    //   {id: 1, name: 'Absinthe'},
    //   {id: 2, name: 'Bouillon'},
    //   {id: 5, name: 'Caviar'},
    //   {id: 3, name: 'Coffee'},
    //   {id: 4, name: 'Dessert'},
    //   {id: 5, name: 'Egg'},
    //   {id: 6, name: 'Horn'},
    //   {id: 7, name: 'Iced Tea'},
    //   {id: 8, name: 'Marrow'},
    //   {id: 9, name: 'Melon'},
    //   {id: 10, name: 'Parfait'},
    //   {id: 11, name: 'Salt'},
    //   {id: 12, name: 'Saucier'},
    //   {id: 13, name: 'Soup'}
    // ];
this.spoons.push({id: 1, name: 'Absinthe'});
  }

}
