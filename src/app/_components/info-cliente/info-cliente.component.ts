import { Component, input, InputSignal } from '@angular/core';
import { Cliente } from '../../_models/cliente';

@Component({
  selector: 'app-info-cliente',
  standalone: false,
  
  templateUrl: './info-cliente.component.html',
  styleUrl: './info-cliente.component.scss'
})
export class InfoClienteComponent {
public cliente: InputSignal<Cliente[]> = input.required<Cliente[]>()
public exibeLixeira : InputSignal<boolean> = input<boolean>(false)
public exibeAdd : InputSignal<boolean> = input<boolean>(false)

}
