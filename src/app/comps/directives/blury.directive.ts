import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBlury]'
})
export class BluryDirective {

  constructor(private el:ElementRef) { }

  @HostListener('blur') onBlur(){
    console.log("The element blurred!!");
    
    this.blury();
  }

  blury(){
    alert("Don't leave me!!!")  
  }
}
