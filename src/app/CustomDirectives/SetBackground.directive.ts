import { Directive, ElementRef, OnInit, Renderer2, Input, HostBinding } from "@angular/core";

@Directive({
    selector: '[setBackground]',
    standalone: true
})
export class SetBackground implements OnInit {

    // private element: ElementRef;
    // private renderer: Renderer2;
    // @Input('setBackground') backColor: string = '#36454F';
    // @Input() textColor: string = 'white';

    @Input('setBackground') changeTextAndBackColor: { backColor: string, textColor: string } = {
        backColor: 'orange',
        textColor: 'black'
    };



    constructor(private element: ElementRef, private renderer: Renderer2) {
        // this.element = element;        
        // this.renderer = renderer;


    }

    ngOnInit() {

        // this.element.nativeElement.style.backgroundColor = '#36454F';
        // this.element.nativeElement.style.color = 'white';
        this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.changeTextAndBackColor.backColor)
        this.renderer.setStyle(this.element.nativeElement, 'color', this.changeTextAndBackColor.textColor)
        // this.renderer.setAttribute(this.element.nativeElement, 'title', 'This is set example');


    }
}