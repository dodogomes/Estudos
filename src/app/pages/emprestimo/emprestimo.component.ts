import { Component, inject, signal } from '@angular/core';
import { Livro } from '../../_models/livro';
import { EmprestimoFacade} from './emprestimo.facade';
import { Cliente } from '../../_models/cliente';

@Component({
  selector: 'app-emprestimo',
  standalone: false,
  templateUrl: './emprestimo.component.html',
  styleUrl: './emprestimo.component.scss'
})
export class EmprestimoComponent {

  private emprestimoFacade : EmprestimoFacade = inject(EmprestimoFacade)
  pesquisaCliente = signal<string>('')

  cliente : Cliente[] = [
    {
      id: 5,
      cliCPF: '111.111.111-22',
      cliNome: 'Douglas',
      cliEndereco: 'Av Rua',
      cliCidade: 'São Paulo',
      cliBairro: 'Grajau',
      cliNumero: '211',
      cliTelefoneCelular: '11980491930',
      cliTelefoneFixo: '1155948392',
    }
  ]

  livros : Livro[] = [
    {
      id: 2,
      livroNome: 'string',
      livroAutor: 'string',
      livroEditora: 'string',
      livroAnoPublicacao: new Date(2023,5,3),
      livroEdicao: 'string'
    },
    {
      id: 2,
      livroNome: 'string',
      livroAutor: 'string',
      livroEditora: 'string',
      livroAnoPublicacao: new Date(2023,5,3),
      livroEdicao: 'string'
    },
    {
      id: 2,
      livroNome: 'string',
      livroAutor: 'string',
      livroEditora: 'string',
      livroAnoPublicacao: new Date(2023,5,3),
      livroEdicao: 'string'
    },
  ]

  openModal(){
    this.emprestimoFacade.abrirConsultaCliente(this.pesquisaCliente)
  }

}
