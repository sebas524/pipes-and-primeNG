import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order',
})
export class OrderPipe implements PipeTransform {
  transform(value: Hero[], by: string = 'no value'): Hero[] {
    switch (by) {
      case 'name':
        return (value = value.sort((a, b) => (a.name > b.name ? 1 : -1)));
      case 'flies':
        return (value = value.sort((a, b) => (a.flies > b.flies ? 1 : -1)));
      case 'color':
        return (value = value.sort((a, b) => (a.color > b.color ? 1 : -1)));

      default:
        return value;
    }
  }
}
