import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTerm'
})
export class FilterTermPipe implements PipeTransform {

  transform(values: string[], term: string): any {
    console.log("higati lterm");
    
    return     values.find(str=> str == term);

  }

}
