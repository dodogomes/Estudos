import { Component, input, InputSignal, Signal } from '@angular/core';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss',
    standalone: false
})
export class DropdownComponent {
  public route: InputSignal<string> = input<string>("");


ngOnInit(){
  

}



  funcaoclick(){
    const menu = document.querySelector('.menu')
    menu?.classList.toggle('ativo')
  }
}


