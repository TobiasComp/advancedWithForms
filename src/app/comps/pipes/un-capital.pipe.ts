import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unCapital'
})
export class UnCapitalPipe implements PipeTransform {

  transform(value: string): any {
    console.log("higati luncapital",value);
    console.log("hello");
    
    return value.toLowerCase();
  }

}
