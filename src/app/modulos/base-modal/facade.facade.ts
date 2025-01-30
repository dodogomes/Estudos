import { inject, Injectable, signal } from '@angular/core';
import { FakeJsonServiceService } from '../../_components/fake-json-api/fake-json-service.service';
import { usuario } from '../../_components/fake-json-api/fake-json_interface';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { toObservable } from '@angular/core/rxjs-interop';
import { BaseModalService } from './base-modal.service';
@Injectable({
  providedIn: 'root'
})

export class FacadeService {

  private appJsonSerivce : BaseModalService = inject(BaseModalService)
  usuario = signal<usuario[]>([])
  observableSignal = toObservable(this.usuario)
  private toastr: ToastrService = inject(ToastrService)

  get listaUsuario(): Observable<usuario[]>{
    return this.observableSignal = this.appJsonSerivce.obterUsuario()
  }


    fakeJsonService: FakeJsonServiceService = inject(FakeJsonServiceService)



  #localState = {
    id: signal(''),
    nome: signal(''),
    idade: signal(0),
    estado: signal(''),
    isAdmin: signal(false)
  }



  createUsuario(usuario : usuario[]){
    this.appJsonSerivce.cadastrarUsuario(usuario).subscribe({
      next: (value) =>  {
        this.toastr.show('post correto!')
        this.usuario.set(value)
      },
      error:(error) => {
        this.toastr.error('valores incorretos')
      },
    })
  }

}
