import { Component, input, Input, InputSignal, output } from '@angular/core';
import { Livro } from '../../_models/livro';

@Component({
  selector: 'app-info-livro',
  standalone: false,
  
  templateUrl: './info-livro.component.html',
  styleUrl: './info-livro.component.scss'
})
export class InfoLivroComponent { //MUDANÇAS PARA O SIGNALS
public livro: InputSignal<Livro[]> = input.required<Livro[]>()
public exibeLixeira : InputSignal<boolean> = input<boolean>(false)
public exibeAdd : InputSignal<boolean> = input<boolean>(false)
}




