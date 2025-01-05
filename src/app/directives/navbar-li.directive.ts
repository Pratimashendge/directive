import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarLi]'
})
export class NavbarLiDirective implements OnInit {

  constructor(
    private _eleRef:ElementRef,
    private _renderer:Renderer2
  ) { }
ngOnInit(): void {
  
}
 @HostListener('click')toggleBtn(){
  const nextchild=this._eleRef.nativeElement.children[1];
  if(nextchild){
  if(nextchild.classList.contains('show')){
    this._renderer.removeClass(nextchild,'show')
  }else{
    this._renderer.addClass(nextchild,'show')
  }
 }
}
}
