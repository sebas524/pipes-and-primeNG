import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [],
})
export class OrderComponent {
  toggle: boolean = false;
  orderBy: string = '';
  heroes: Hero[] = [
    {
      name: 'superman',
      flies: true,
      color: Color.blue,
    },
    {
      name: 'batman',
      flies: false,
      color: Color.black,
    },
    {
      name: 'spiderman',
      flies: false,
      color: Color.red,
    },
    {
      name: 'wonderwoman',
      flies: false,
      color: Color.yellow,
    },
    {
      name: 'greenlantern',
      flies: true,
      color: Color.green,
    },
  ];

  toggleHandler() {
    this.toggle = !this.toggle;
  }

  changeOrder(value: string) {
    this.orderBy = value;
    console.log(value);
  }
}
