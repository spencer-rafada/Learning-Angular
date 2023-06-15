import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revert'
})
export class RevertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
