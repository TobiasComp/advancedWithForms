import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addAstringArray'
})
export class AddAstringArrayPipe implements PipeTransform {

  transform(value: string[]): string {
    
    console.log("higati lapipe");
    
    let newString=""
    for (let i=0; i<value.length; i++)
      newString += value[i]+" ";
    console.log(newString);
    
    return newString;
  }


}
