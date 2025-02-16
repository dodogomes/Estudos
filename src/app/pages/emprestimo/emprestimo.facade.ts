import { inject, Injectable, signal } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConsultaClientesComponent } from '../../_modals/consulta-clientes/consulta-clientes.component';
import { ConsultaLivrosComponent } from '../../_modals/consulta-livros/consulta-livros.component';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoFacade {

  private bsModalService: BsModalService = inject(BsModalService)
  consultaCliente = signal<string>('')

  abrirConsultaCliente(consultaCliente = signal('')){
    const initialState = {
      consultaCliente: consultaCliente
    }
    this.bsModalService.show(ConsultaClientesComponent, { initialState })
  }

  abrirConsultaLivro(consultaLivro = signal('')){
    const initialState = {
      consultaLivro: consultaLivro
    }
    this.bsModalService.show(ConsultaLivrosComponent, { initialState })
  }

}
