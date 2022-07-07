import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenValue'
})
export class EvenValuePipe implements PipeTransform {

  transform(value: number[], ...args: number[]): number[] {
    return value.filter(elt => elt % 2 == 0);
  }

}
