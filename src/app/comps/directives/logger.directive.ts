import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLogger]'
})
export class LoggerDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click') onClick(){
    this.log();
  }
  log(){
    console.log("hello from logger");
    console.log(this.el);
    
  }
}
