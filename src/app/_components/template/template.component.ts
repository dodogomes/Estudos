import { Component, EventEmitter, inject, Input, input, Output, signal } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-template',
    styleUrl: './template.component.scss',
    template: `
  <div class="modal-header">
    <h5 class="modal-title">Dropdown na Modal</h5>
    <button type="button" class="btn-close" aria-label="Close" (click)="close()"></button>
  </div>
  <div class="modal-body">
    <div class="dropdown">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
`,
    standalone: false
})
export class TemplateComponent {
  @Input() receberDados?: any

  @Output() methodName = new EventEmitter<void>();
  varialve3 = signal(20)
  @Output() sinal = new EventEmitter<number>();


emitirSignal(){
  this.sinal.emit(this.varialve3())
}
modalRef: BsModalRef = inject (BsModalRef)



close() {
this.modalRef.hide()
}
  eventoEmitir(){
      this.methodName.emit()
  }
}
