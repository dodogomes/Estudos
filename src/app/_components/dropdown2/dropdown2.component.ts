import { Component } from '@angular/core';

@Component({
    selector: 'app-dropdown2',
    templateUrl: './dropdown2.component.html',
    styleUrl: './dropdown2.component.scss',
    standalone: false
})
export class Dropdown2Component {



  funcaoToggle(){
    const toggle = document.querySelector('.menu')
    toggle?.classList.toggle('ativo')
  }
}
