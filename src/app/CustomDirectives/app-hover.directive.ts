import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class AppHoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

@HostBinding('style.background') backgroundColor: string = '#28282B';
@HostBinding('style.border') border: string = 'none';
@HostBinding('style.color') textColor: string = '#fff';

@HostListener('mouseenter') OnMouseEnter(){
  this.backgroundColor = 'white';
  this.border = '#28282b 3px solid';
  this.textColor = '#28282B';

}

@HostListener('mouseout') OnMouseOut(){
  this.backgroundColor = '#28282B';
  this.border = 'none';
  this.textColor = '#fff';

}


}

// .btn-add-to-cart{
//   border: none;
//   background-color: #28282B;
//   padding: 10px 30px;
//   font-size: 20px;
//   color: #fff;
// }