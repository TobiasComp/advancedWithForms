import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLoggerValue]'
})
export class LoggerValueDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click') onClick(){
    this.log();
  }

  log(){
    console.log(this.el);
    
  }
}
