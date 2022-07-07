import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar'
})
export class GetCharPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    if (args[0] && args[0] < value.length) {

    }
    return value[0];
  }

}
