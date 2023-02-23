import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCapitalizedPipe',
})
export class CapitalizedPipe implements PipeTransform {
  transform(value: string, caps: boolean = true): string {
    // if (caps) {
    //   return value.toUpperCase();
    // } else {
    //   return value.toLowerCase();
    // }
    return caps ? value.toUpperCase() : value.toLocaleLowerCase();
  }
}
