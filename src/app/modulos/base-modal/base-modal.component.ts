import { Component, inject, signal } from '@angular/core';
import { FacadeService } from './facade.facade';
import { usuario } from '../../_components/fake-json-api/fake-json_interface';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-base-modal',
  standalone: false,
  templateUrl: './base-modal.component.html',
  styleUrl: './base-modal.component.scss'
})
export class BaseModalComponent {

  private facadeServico : FacadeService = inject (FacadeService)
  resultados = this.facadeServico.listaUsuario

  ngOnInit(){
    console.log(this.resultados);
    
  }
  
  constructor() {
    console.log('BaseService constructor chamado');
  }
}





   // private appJsonSerivce : BaseModalService = inject(BaseModalService)
    // usuario = new Observable<usuario[]>()
    // private toastr: ToastrService = inject(ToastrService)
  
    // get listaUsuario(){
    //   return this.usuario = this.appJsonSerivce.obterUsuario()
    // }
  
  


    // public servico: BaseModalService = inject(BaseModalService)

    // ngOnInit(){
    //   this.listaUsuario

    // }
