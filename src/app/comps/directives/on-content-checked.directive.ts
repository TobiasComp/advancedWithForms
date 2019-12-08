import { Directive, ElementRef, OnInit, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[appOnContentChecked]'
})
export class OnContentCheckedDirective implements AfterContentChecked	
{
  elem: HTMLElement

  ngAfterContentChecked(): void {
    console.log(this.elem.innerText);
    
  }
  constructor(el:ElementRef) {
    this.elem = el.nativeElement;
   }

}
