import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../_models/cliente';

@Component({
  selector: 'app-clientes',
  standalone: false,
  
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
#route = inject(Router)

newCliente(){
  this.cliente.set([])
  this.#route.navigate(['cliente/create'], {state: {cliente: null}})
}

cliente = signal<Cliente[]>([ {
    id: 2,
    cliCPF: '480.897.178-02',
    cliNome: 'string',
    cliEndereco: 'string',
    cliCidade: 'string',
    cliBairro: 'string',
    cliNumero: 'string',
    cliTelefoneCelular: 'string',
    cliTelefoneFixo: 'string',
  },
  {
    id: 3,
    cliCPF: '480.897.178-02',
    cliNome: 'Dodo',
    cliEndereco: 'Av do estado',
    cliCidade: 'Cidade',
    cliBairro: 'Bairro',
    cliNumero: '587',
    cliTelefoneCelular: '11878754859',
    cliTelefoneFixo: '1155664875',
  },])

alterarOuExcluirCliente(cliente: Cliente){
  this.#route.navigate(['cliente/put'] , {state: {cliente}})
}
}
