import { Component, computed, signal } from '@angular/core';
import { Cliente } from '../../_models/cliente';

@Component({
  selector: 'app-consulta-clientes',
  standalone: false,
  
  templateUrl: './consulta-clientes.component.html',
  styleUrl: './consulta-clientes.component.scss'
})
export class ConsultaClientesComponent {
  consultaCliente = signal<string>('')
  

  ngOnInit(){
  }

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
    },
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
    },
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
    },{
      id: 5,
      cliCPF: '111.111.111-22',
      cliNome: 'Douglas',
      cliEndereco: 'Av Rua',
      cliCidade: 'São Paulo',
      cliBairro: 'Grajau',
      cliNumero: '211',
      cliTelefoneCelular: '11980491930',
      cliTelefoneFixo: '1155948392',
    },{
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
}
