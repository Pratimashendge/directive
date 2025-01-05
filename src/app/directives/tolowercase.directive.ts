import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTolowercase]'
})
export class TolowercaseDirective {

  constructor() { }

 @HostListener('keyup',['$event'])
 onkeyUp(eve:Event){
  let inputControl=eve.target as HTMLInputElement;
  inputControl.value=inputControl.value.toLowerCase()
 }
}
