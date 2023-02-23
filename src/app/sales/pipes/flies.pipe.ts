import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFliesHeroPipe',
})
export class FliesPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'yes' : 'no';
  }
}
