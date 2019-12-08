import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCloud]'
})
export class CloudDirective {
  isClouded:boolean = false
  constructor(private el:ElementRef) { }

  @HostListener('mouseover') onMouseOver() {    
    this.cloud();
  }
  
  
  private cloud() {
    
    
    if (this.isClouded){
      this.el.nativeElement.style.opacity="1";
      this.isClouded = false;
    }
    else {
      this.el.nativeElement.style.opacity=".5";
      this.isClouded = true;
    }
  }
}
