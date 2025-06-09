import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[setBackground]',
  standalone: true,
})
export class SetBackground implements OnInit {
  @Input('setBackground') changeTextAndBackColor: {
    backColor: string;
    textColor: string;
  } = {
    backColor: 'orange',
    textColor: 'black',
  };

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.changeTextAndBackColor.backColor
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'color',
      this.changeTextAndBackColor.textColor
    );
  }
}
