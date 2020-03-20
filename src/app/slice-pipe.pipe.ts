import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicePipe'
})
export class SlicePipePipe implements PipeTransform {

  transform(value: string, texto?: string): string {
    let text: string = '';
    text = value;
    return text;
  }

}
