import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b';

    //Essa diretiva é só pra testar poderia utilizar o red do css normalmente
    //footer.component.html
  }

}
