import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEnlarge]'
})
export class EnlargeDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click') onClick() {
    this.enlarge();
  }

  private enlarge() {
    this.el.nativeElement.style.fontSize='2em'
  }
}

