import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCssRenderer]'
})
export class CssRendererDirective implements OnInit {
 
  @Input() hoverColor!:string;
  @HostBinding('style.backgroundColor')bgColor!:string;
  @HostBinding('style.Color')textColor!:string;
  constructor(
    private _eleRef:ElementRef,
    private _renderer:Renderer2
  ) { }


ngOnInit(): void {
  
}
@HostListener('mouseover')
onMouseOvercb(){
  this.bgColor=this.hoverColor;
  this.textColor='#fff';

}
@HostListener('mouseout')
onMouseOutcb(){
  this.bgColor=this.hoverColor;
  this.textColor='#000';

}

}
