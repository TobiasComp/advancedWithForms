import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toIsraeliDate'
})
export class ToIsraeliDatePipe implements PipeTransform {

  transform(value: string): any {
    let date = new Date();
    // console.log(date.g);
    
    return date.getDay()+"."+date.getMonth()+"."+date.getFullYear();
  }

}
