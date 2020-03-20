import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: Date, date?: Date): Date {
    let fecha: Date;
    fecha = value;
    return fecha;
  }

}
