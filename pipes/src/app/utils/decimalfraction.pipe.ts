import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalfraction'
})
export class DecimalfractionPipe implements PipeTransform {

  transform(value: number, numberofDigits: number = 1): string {
    return value.toFixed(numberofDigits)
  }

}
