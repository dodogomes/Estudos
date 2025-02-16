import { Component, inject, signal } from '@angular/core';
import { usuario } from '../../_models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  standalone: false,

  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  #route = inject(Router)

  usuario = signal<usuario[]>([{
    id: 2,
    nome: 'string',
    email: 'string',
    password: undefined,
    isAdmin: true
  },
  {
    id: 2,
    nome: 'strong',
    email: 'strong',
    password: undefined,
    isAdmin: false
  },
  ])

  alterarOuExcluirUsuario(usuario: usuario) {
    console.log('valores' ,this.usuario());

    this.#route.navigate(['usuario/put'], { state: { usuario } })
  }

  newUsuario() {
    this.usuario.set([])
    console.log('new Usuario',this.usuario());
    this.#route.navigate(['usuario/create'], { state: { usuario: undefined } })
  }

}
