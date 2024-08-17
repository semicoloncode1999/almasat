import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toNumber'
})
export class ToNumberPipe implements PipeTransform {

  transform(value: string): number[] {
    let arr = [];
    for (let i = 0; i < Number(value); i++) {
      arr.push(i);
    }
    return arr;
  }

}
