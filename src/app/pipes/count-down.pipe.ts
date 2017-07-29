import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countDown'
})
export class CountDownPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
