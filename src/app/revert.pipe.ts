import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revert',
})
export class RevertPipe implements PipeTransform {
  transform(value: any): any {
    return value.split('').reverse().join('');
  }
}
