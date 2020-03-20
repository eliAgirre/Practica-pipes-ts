import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(value: number, currency?: number): number {
    let cur: number = 0;
    cur = value;
    return cur;
  }

}
