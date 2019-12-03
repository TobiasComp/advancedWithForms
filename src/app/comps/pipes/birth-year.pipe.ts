import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'birthYear'
})
export class BirthYearPipe implements PipeTransform {

  transform(value:number): any {
    if (value<1000)
      return value+1900;
    else
      return value;
  }

}
