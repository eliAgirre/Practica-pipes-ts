import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalPipe'
})
export class DecimalPipePipe implements PipeTransform {

  transform(value: number, decimales?: number): number {
    let decimals: number = 0;
    decimals = value;
    return decimals;
  }

}
