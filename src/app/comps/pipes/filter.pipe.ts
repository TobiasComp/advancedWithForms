import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], num:number): any[] {
    let newArr:any[]=[]
    for (let i=0; i<num; i++)
      newArr.push(value[i]);
    return newArr;
  }

}
