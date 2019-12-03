import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInvisible]'
})
export class InvisibleDirective {

  constructor(private el:ElementRef) { 
    
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.visible('show');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.visible(null);
  }
  
  private visible(show: string) {
    console.log("visible",show);
    if (!show)
      this.el.nativeElement.style.visibility = "hidden";
    else
      this.el.nativeElement.style.visibility = "visible";

  }
}
