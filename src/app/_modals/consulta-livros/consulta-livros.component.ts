import { Component, inject, signal } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Livro } from '../../_models/livro';

@Component({
  selector: 'app-consulta-livros',
  standalone: false,
  
  templateUrl: './consulta-livros.component.html',
  styleUrl: './consulta-livros.component.scss'
})
export class ConsultaLivrosComponent {
  bsModalService = inject(BsModalService)
  consultaLivro = signal<string>('')

  ngOnInit(){
    console.log(this.consultaLivro());
    
  }
  


   livro : Livro[] = [
      {
        id: 2,
        livroNome: 'string',
        livroAutor: 'string',
        livroEditora: 'string',
        livroAnoPublicacao: new Date('11/11/2021'),
        livroEdicao: 'string'
      },
    ]
}
